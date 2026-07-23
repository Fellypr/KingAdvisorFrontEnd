import { DeckMeta } from "@/features/decks-metas/types/decks-meta"
import { apiKingAdvisor } from "../../../services/api"

export const getAllDecksMetasServices = {

    getAll: async (): Promise<DeckMeta[]> => {
        return apiKingAdvisor<DeckMeta[]>("/DecksMeta/get-deck-meta", 
        { 
            next: { revalidate: 3600 } 
        })
    }
}