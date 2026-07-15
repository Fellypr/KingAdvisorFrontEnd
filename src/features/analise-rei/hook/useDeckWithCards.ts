"use client";

import {
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

type DeckContextData = {
  addingCardInDeck: (card?: Card, e?: MouseEvent) => void;
  removeCardFromDeck: (cardIndex: number) => void;
  rulePositionCard: (index :number ,item: Card) => void
  deck: Card[];
  cardSelect: number | null;
  setCardSelect: Dispatch<SetStateAction<number | null>>
};

const DeckContext = createContext<DeckContextData | null>(null);

export function CreateDeckProvider({ children }: { children: ReactNode }) {
  const [deck, setDeck] = useState<Card[]>([]);
  const [cardSelect , setCardSelect] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const addingCardInDeck = (card?: Card, e?: MouseEvent) => {
    e?.preventDefault();

    const selectedCard = card;
    if (!selectedCard) {
      return;
    }

    setDeck((currentDeck) => {
      if (currentDeck.length >= 8) {
        return currentDeck;
      }

      const cardAlreadyExists = currentDeck.some(
        (currentCard) => currentCard.id === selectedCard.id
      );
      if (cardAlreadyExists) {
        return currentDeck;
      }

      return [...currentDeck, { ...selectedCard }];
    });
  };

  const removeCardFromDeck = (cardIndex: number) => {
    setDeck((currentDeck) =>
      currentDeck.filter((_, index) => index !== cardIndex)
    );
  };

  const rulePositionCard = (indexCard: number,item: Card) =>{
    if(indexCard == 0){
        return item.iconUrls?.evolutionMedium || item.iconUrls?.medium 
    }
    else if(indexCard == 1){
        return item.iconUrls?.heroMedium || item.iconUrls?.medium 
    }
    else if(indexCard == 2){
        return item.iconUrls?.evolutionMedium || item.iconUrls?.heroMedium || item.iconUrls?.medium 
    }else{
        return item.iconUrls?.medium
    }

  }

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
    console.log("por enquanto o deck estar assim", deck);
  }, [deck]);

  const value = useMemo(
    () => ({
      addingCardInDeck,
      removeCardFromDeck,
      deck,
      rulePositionCard,
      cardSelect,
      setCardSelect
    }),
    [deck,cardSelect]
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
          : null
      )
    )
  );
}

export function useCreateDeck() {
  const context = useContext(DeckContext);

  if (!context) {
    throw new Error("useCreateDeck precisa ser usado dentro de CreateDeckProvider");
  }

  return context;
}
