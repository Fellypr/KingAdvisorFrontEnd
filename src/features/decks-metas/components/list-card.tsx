'use client';

import { useDeckMeta } from "@/features/decks-metas/hook/useDeckMeta";
import { CardDetails, DeckMeta } from "@/features/decks-metas/types/decks-meta";

export function ListCard() {
    const { decksMetas, loading, error } = useDeckMeta();

    const getDeckCards = (deck: DeckMeta): CardDetails[] => {
        return (deck.cardSlugs ?? []).flatMap((group) =>
            Object.values(group).flat().filter((card): card is CardDetails => Boolean(card))
        );
    };

    const getCardImage = (card: CardDetails) => {

        if(card.slotType == "normal"){
            return card.iconUrls.medium
        }else if(card.slotType == "evolution"){
            return card.iconUrls.evolutionMedium
        }
        else if(card.slotType == "heroic"){
            return card.iconUrls.heroMedium
        }else{
            return "imagem não encontrada"
        }   

        // return card.iconUrls.evolutionMedium ?? card.iconUrls.heroMedium ?? card.iconUrls.medium ?? "/images/carta.png";
    };

    if (loading) {
        return (
            <div className="w-full rounded-2xl bg-black/25 px-6 py-8 text-center text-white">
                Carregando decks do meta...
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full rounded-2xl bg-red-950/40 px-6 py-8 text-center text-white">
                {error}
            </div>
        );
    }
    console.log(decksMetas);

    return (
        <div className="w-full">
            {decksMetas?.map((deck) => {
                const cards = getDeckCards(deck);

                return (
                    <div
                        key={deck.id}
                        className="relative mt-10 flex w-full flex-col items-center justify-center gap-6 rounded-2xl lg:flex-row lg:items-start"
                    >
                        <div className="mx-auto grid w-full max-w-[320px] shrink-0 grid-cols-4 gap-4 sm:max-w-[340px] md:max-w-[400px] lg:mx-0">
                            {cards?.map((card) => (
                                <img
                                    key={`${deck.id}-${card.id}-${card.slotType}`}
                                    src={getCardImage(card)}
                                    className="aspect-[3/5.3] w-full rounded-md object-cover transition-transform duration-200 hover:scale-105"
                                    alt={card.name}
                                />
                            ))}
                        </div>

                        <div className="flex flex-1 flex-col gap-2 pt-8 text-left lg:text-left">
                            <h2 className="bg-gradient-to-r from-[#f5c842] to-[#e8a820] bg-clip-text font-['Luckiest_Guy'] text-2xl leading-none tracking-[5px] text-transparent sm:text-[30px]">
                                {deck.name}
                            </h2>
                            <p className="font-['Luckiest_Guy'] text-sm leading-relaxed text-[#d9d9d9] sm:text-[14px]">
                                {deck.strategy}
                            </p>
                        </div>

                        <div className="relative mt-4 flex h-[144px] w-[144px] shrink-0 items-center justify-center lg:mt-0">
                            <img src="/images/vitoria.png" className="pointer-events-none absolute inset-0 size-full object-cover" alt="Ícone do deck" />
                            <div className="relative z-10 ml-[14px] text-center font-['Luckiest_Guy'] leading-none text-white">
                                <span className="block text-[28px] tracking-[5px]">
                                    {deck.everageWin}
                                </span>
                                
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
