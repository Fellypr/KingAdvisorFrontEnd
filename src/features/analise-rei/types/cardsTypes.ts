import { ButtonHTMLAttributes } from "react";

export interface Card {
  mongoId?: string | null;
  id: number;
  cardId: string;
  name: string;
  maxLevel: number;
  maxEvolutionLevel?: number | null;
  elixirCost: number;
  rarity: string;
  iconUrls: CardIconUrls;
}

export interface CardIconUrls {
  medium: string;
  heroMedium?: string | null;
  evolutionMedium?: string | null;
}

export type DeckPlayer = {
  team: {
    cards: Card[]
  }[]
}

export type DeckUserCard = Card & {
  level: number
}

export type DeckAnalysisResponse = {
  DeckPlayer: DeckPlayer[]

  KingRecommendations: {
    deck_user: {
      deck_user: DeckUserCard[]

      ForceAttackAndDefense: {
        force_attack: string
        force_defense: string
      }

      message: string
    }

    recommendations_deck_change: {
      ForceAttackAndDefense: {
        force_attack: string
        force_defense: string
      }

      message: string
    }
  }
}

export interface AnalyzeDeckButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick?: () => void;
}