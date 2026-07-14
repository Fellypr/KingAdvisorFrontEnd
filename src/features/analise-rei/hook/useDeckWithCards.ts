"use client"
import {useState,useEffect} from "react"
import {useCards} from "./useCards"
import {Card} from "../types/cardsTypes"
export function useCreateDeck(){
    const [deck,setDeck] = useState<Card[]>([]);
    const {cards} = useCards();

    const addingCardInDeck = (card?: Card, e?: React.MouseEvent) => {
        try{
            e?.preventDefault();

        const selectedCard = card ?? cards[0];
        if (!selectedCard) {
            return;
        }

        const cardsDecks = {
            ...selectedCard 
        }
        setDeck((currentDeck) => [...currentDeck ,cardsDecks])
        }catch{
            console.log("eroooooooooooooooooo")
        }

    }

    useEffect(()=>{
        console.log("por enquanto o deck estar assim",deck)
    },[deck])
    
    return{
        addingCardInDeck,
        deck
    }
}
