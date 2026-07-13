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