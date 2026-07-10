import { useEffect, useState } from "react";
import { DeckMeta } from "../types/decks-meta";
import { getAllDecksMetasServices } from "../services/get-deck-meta";

export function useDeckMeta() {
    const [decksMetas, setDecksMetas] = useState<DeckMeta[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getAllDecksMetas = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getAllDecksMetasServices.getAll();
            setDecksMetas(response);
        } catch {
            setError("Erro inesperado");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            void getAllDecksMetas();
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, []);

    return {
        decksMetas,
        loading,
        error,
    };
}
