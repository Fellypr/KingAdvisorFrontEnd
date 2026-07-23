"use client";
import { useState } from "react"
import {postDeckAnalysis} from "../services/king-analsys"
import {DeckAnalysisResponse} from "../types/cardsTypes"
import {Card} from "../types/cardsTypes"


export const useRecommendation = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [recommendation, setRecommendation] = useState<DeckAnalysisResponse | null>(null)

    const postDeckForRecommendation = async (deck:Card[]) => {
        setLoading(true)
        setError(null)
        try{
            const response = await postDeckAnalysis.sendDeck(deck)
            setRecommendation(response)
            console.log('aqui esta', response)
        }catch(error){
            setError(
                error instanceof Error ? error.message : "Erro ao buscar recomendação"
            )
            console.log('aqui esta o erro', error instanceof Error ? error.message : "Erro ao buscar recomendação")

        }finally{
            setLoading(false)
        }
    }
    return{
        recommendation,
        postDeckForRecommendation,
        loading,
        error,
    }
}