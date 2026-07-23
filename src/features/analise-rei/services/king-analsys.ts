import { apiKingAdvisor } from "@/services/api";
import { DeckAnalysisResponse, Card } from "../types/cardsTypes";

export const postDeckAnalysis = {
    sendDeck: async (deck: Card[]): Promise<DeckAnalysisResponse> => {
        console.log(JSON.stringify({ deckPlayer: deck }, null, 2));
        return apiKingAdvisor<DeckAnalysisResponse>("/GetInfoPlayer/recommendation-ia",{
            method: "POST",
            body: JSON.stringify({deckPlayer: deck},null,2)
        })


    }
}