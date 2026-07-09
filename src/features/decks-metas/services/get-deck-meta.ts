import {DeckMeta} from "@/features/decks-metas/types/decks-meta"
import {apiDecksMetas} from "../services/api"

export const getAllDecksMetasServices = {

    getAll: async() : Promise<DeckMeta[]> => {
        return apiDecksMetas<DeckMeta[]>("",{next: {revalidate:3600}})
    }
}