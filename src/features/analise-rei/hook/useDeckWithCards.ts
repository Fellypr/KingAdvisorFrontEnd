"use client";

import {
  useCallback,
  createElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import {
  DragDropProvider,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/react";
import type { Card } from "../types/cardsTypes";

export const DECK_DROP_ID = "deck-drop-zone";
const DECK_STORAGE_KEY = "king-advisor:analise-rei:deck";

function loadDeckFromStorage() {
  if (typeof window === "undefined") {
    return Array.from({ length: 8 }, () => undefined) as Array<
      Card | undefined
    >;
  }

  try {
    const storedDeck = window.localStorage.getItem(DECK_STORAGE_KEY);

    if (!storedDeck) {
      return Array.from({ length: 8 }, () => undefined) as Array<
        Card | undefined
      >;
    }

    const parsedDeck = JSON.parse(storedDeck) as Array<Card | null>;

    return Array.from(
      { length: 8 },
      (_, index) => parsedDeck?.[index] ?? undefined,
    );
  } catch {
    return Array.from({ length: 8 }, () => undefined) as Array<
      Card | undefined
    >;
  }
}

type DeckContextData = {
  addingCardInDeck: (card?: Card, e?: MouseEvent) => void;
  removeCardFromDeck: (cardIndex: number) => void;
  rulePositionCard: (
    index: number,
    item: Card | null,
  ) => string | null | undefined;
  changeCardSlot2: (item: Card | undefined) => void;
  changerCardSlot2: string;
  deck: Array<Card | undefined>;
  cardSelect: number | null;
  setDeck:Dispatch<SetStateAction<Array<Card|undefined>>>
  setCardSelect: Dispatch<SetStateAction<number | null>>;
};

const DeckContext = createContext<DeckContextData | null>(null);

export function CreateDeckProvider({ children }: { children: ReactNode }) {
  const [deck, setDeck] = useState<Array<Card | undefined>>(
    Array.from({ length: 8 }, () => undefined),
  );
  const [cardSelect, setCardSelect] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [changerCardSlot2, setChangerCardSlot2] =
    useState<string>("evolutionMedium");

  const addingCardInDeck = useCallback((card?: Card, e?: MouseEvent) => {
    e?.preventDefault();

    const selectedCard = card;
    if (!selectedCard) {
      return;
    }

    setDeck((currentDeck) => {
      const occupiedSlots = currentDeck.filter(Boolean).length;
      if (occupiedSlots >= 8) {
        return currentDeck;
      }

      const cardAlreadyExists = currentDeck.some(
        (currentCard) => currentCard?.id === selectedCard.id,
      );
      if (cardAlreadyExists) {
        return currentDeck;
      }

      const availableIndex =
        selectedCard.rarity === "champion"
          ? !currentDeck[1]
            ? 1
            : !currentDeck[2]
              ? 2
              : -1
          : currentDeck.findIndex((currentCard) => !currentCard);
      if (availableIndex === -1) {
        return currentDeck;
      }

      const nextDeck = [...currentDeck];
      nextDeck[availableIndex] = { ...selectedCard };

      return nextDeck;
    });
  }, []);

  const removeCardFromDeck = useCallback((cardIndex: number) => {
    setDeck((currentDeck) => {
      const nextDeck = [...currentDeck];
      nextDeck[cardIndex] = undefined;

      return nextDeck;
    });
  }, []);

  const changeCardSlot2 = useCallback((item: Card | undefined) => {
    if (!item) return;
    const existHero = !!item.iconUrls.heroMedium;
    const existEvolution = !!item.iconUrls.evolutionMedium;

    if (!existHero || !existEvolution) return;

    if (!existEvolution) {
      setChangerCardSlot2("hero");
    } else if (!existHero) {
      setChangerCardSlot2("evolutionMedium");
    } else if (!existEvolution && !existHero) {
      setChangerCardSlot2("medium");
    }

    setChangerCardSlot2((cardNow) =>
      cardNow === "evolutionMedium" ? "hero" : "evolutionMedium",
    );
  }, []);

  const rulePositionCard = useCallback(
    (indexCard: number, item: Card | null) => {
      if (!item) return null;
      if (indexCard == 0) {
        return item.iconUrls?.evolutionMedium || item.iconUrls?.medium;
      } else if (indexCard == 1) {
        return item.iconUrls?.heroMedium || item.iconUrls?.medium;
      } else if (indexCard == 2) {
        if (changerCardSlot2 === "hero") {
          return item.iconUrls?.heroMedium || item.iconUrls?.medium;
        } else if (changerCardSlot2 === "evolutionMedium") {
          return (
            item.iconUrls?.evolutionMedium ||
            item.iconUrls?.heroMedium ||
            item.iconUrls?.medium
          );
        }
      } else {
        return item.iconUrls?.medium;
      }
    },
    [changerCardSlot2],
  );

  const handleDragStart = (event: DragStartEvent) => {
    const card = event.operation.source?.data?.card;
    setActiveCard(card ?? null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { canceled, operation } = event;
    const card = operation.source?.data?.card;
    const wasDroppedOnDeck = operation.target?.id === DECK_DROP_ID;

    if (!canceled && wasDroppedOnDeck && card) {
      addingCardInDeck(card);
    }

    setActiveCard(null);
  };

  useEffect(() => {
    const savedDeck = loadDeckFromStorage();
    const timeoutId = window.setTimeout(() => {
      setDeck(savedDeck);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
      console.log("assim estar o deck:", deck);
    } catch {}
  }, [deck, changerCardSlot2]);

  const value = useMemo(
    () => ({
      addingCardInDeck,
      removeCardFromDeck,
      deck,
      setDeck,
      rulePositionCard,
      cardSelect,
      setCardSelect,
      changeCardSlot2,
      changerCardSlot2,
    }),
    [
      addingCardInDeck,
      removeCardFromDeck,
      deck,
      rulePositionCard,
      cardSelect,
      changeCardSlot2,
      changerCardSlot2,
    ],
  );

  return createElement(
    DeckContext.Provider,
    { value },
    createElement(
      DragDropProvider,
      { onDragStart: handleDragStart, onDragEnd: handleDragEnd },
      children,
      createElement(
        DragOverlay,
        null,
        activeCard
          ? createElement("img", {
              src: activeCard.iconUrls.medium,
              alt: activeCard.name,
              className: "h-30 w-20 rounded-lg object-cover shadow-2xl",
            })
          : null,
      ),
    ),
  );
}

export function useCreateDeck() {
  const context = useContext(DeckContext);

  if (!context) {
    throw new Error(
      "useCreateDeck precisa ser usado dentro de CreateDeckProvider",
    );
  }

  return context;
}
