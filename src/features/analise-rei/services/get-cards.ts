import {apiDecksMetas} from "../../api"
import {Card} from "../types/cardsTypes"
export const getCardsServices = {
    getCards: async() : Promise<Card[]> => {
        return apiDecksMetas<Card[]>("/Cards/get-cards",{
            next:{revalidate:4500}
        })
    }
}