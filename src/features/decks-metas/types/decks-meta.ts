export interface IconUrls {
  medium?: string;
  evolutionMedium?: string;
  heroMedium?: string;
}

export interface CardDetails {
  id: number;
  name: string;
  level: number;
  elixirCost: number;
  iconUrls: IconUrls;
  deckCardName: string;
  isEvolvedInDeck: boolean;
  sourceSlug: string;
  isHeroInDeck: boolean;
  slotType: string;
}

export interface DeckMeta {
  idDocumento?: string; 
  id: number;
  name: string;
  card_slugs: Record<string, CardDetails[]>[]; 
  averageElixir: number;
}