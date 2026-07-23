"use client";
import { AnalyzeDeckButton } from "@/features/analise-rei";
import { useCreateDeck, useRecommendation } from "@/features/analise-rei";
import { Card } from "../types/cardsTypes";
import { RotateCcwIcon } from "lucide-react";

export function DeckActions() {
  const { deck, setDeck } = useCreateDeck();
  const { postDeckForRecommendation, loading } = useRecommendation();

  return (
    <div className="w-full flex aling-center justify-center mt-5">
      <AnalyzeDeckButton
        onClick={() => {
          const deckFiltrado = deck.filter((card) => card != null);
          postDeckForRecommendation(deckFiltrado as Card[]);
        }}
        loading={loading}
      />
      <button
        className="flex justify-center items-center cursor-pointer relative left-10 top-3 bg-gray-600 hover:bg-gray-700 transition-colors duration-200 rounded-full w-9 h-9"
        onClick={() => setDeck(Array.from({ length: 8 }, () => undefined))}
      >
        <RotateCcwIcon className="text-white" />
      </button>
    </div>
  );
}
