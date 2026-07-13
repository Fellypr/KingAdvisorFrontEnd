import { useState, useEffect } from "react";
import { Card } from "../types/cardsTypes";
import { getCardsServices } from "../services/get-cards";

const PESO_RARIDADE = Object.freeze({
  common: 5,
  rare: 4,
  epic: 3,
  legendary: 2,
  champion: 1,
});

export function useCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCards = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCardsServices.getCards();
      const ordenadas = response.sort((a, b) => {
        return (
          PESO_RARIDADE[b.rarity as keyof typeof PESO_RARIDADE] -
          PESO_RARIDADE[a.rarity as keyof typeof PESO_RARIDADE]
        );
      });
      setCards(ordenadas);
      console.log("aqui as cartas", ordenadas);
    } catch {
      setError("Erro ao pega as cartas");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void getCards();
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);
  const getImagemCard = (card: Card) => {
    return (
      card.iconUrls.medium ??
      card.iconUrls.heroMedium ??
      card.iconUrls.evolutionMedium ??
      "Imagem não encontrado"
    );
  };
  const getTypeCard = (card:Card) =>{
    if(card.rarity == "common"){
        return "bg-carta-comum"
    }else if(card.rarity == "rare"){
        return "bg-carta-rara"

    }else if(card.rarity == "epic"){
        return "bg-carta-epica"

    }else if(card.rarity == "legendary"){
        return "bg-carta-lendaria"
    }else{
        return "bg-carta-campeao"
    }
    
  }

  return {
    cards,
    loading,
    error,
    getImagemCard,
    getTypeCard
  };
}
