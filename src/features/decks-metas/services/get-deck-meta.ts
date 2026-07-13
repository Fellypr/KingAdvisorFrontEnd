import {DeckMeta} from "@/features/decks-metas/types/decks-meta"
import {apiDecksMetas} from "../../api"

export const getAllDecksMetasServices = {

    getAll: async() : Promise<DeckMeta[]> => {
        return apiDecksMetas<DeckMeta[]>("/DecksMeta/get-deck-meta",{next: {revalidate:3600}})
    }
}