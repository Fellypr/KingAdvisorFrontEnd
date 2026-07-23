import { apiKingAdvisor } from "../../../services/api"
import { Card } from "../types/cardsTypes"
export const getCardsServices = {
    getCards: async (): Promise<Card[]> => {
        return apiKingAdvisor<Card[]>("/Cards/get-cards", {
            next: { revalidate: 4500 }
        })
    }
}