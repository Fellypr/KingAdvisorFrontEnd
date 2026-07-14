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
import { useCards } from "./useCards";
import type { Card } from "../types/cardsTypes";

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
  const { cards } = useCards();

  const addingCardInDeck = (card?: Card, e?: MouseEvent) => {
    e?.preventDefault();

    const selectedCard = card ?? cards[0];
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

  return createElement(DeckContext.Provider, { value }, children);
}

export function useCreateDeck() {
  const context = useContext(DeckContext);

  if (!context) {
    throw new Error("useCreateDeck precisa ser usado dentro de CreateDeckProvider");
  }

  return context;
}
