"use client";
import {AnalyzeDeckButton} from "@/features/analise-rei"
import {useCreateDeck} from "@/features/analise-rei"
export default function DeckUsuario() {
    const box = Array.from({ length: 8 })
    const {deck, removeCardFromDeck,rulePositionCard} = useCreateDeck();
    return (
        <div className="h-auto w-full ">
            <div
                className="mx-auto w-full max-w-140 rounded-lg  p-4 sm:p-5 md:p-6"
            >
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-x-9 md:gap-y-6">

                    {box.map((_, index) => (
                        <div key={index} className={`relative h-[80px] w-[60px] sm:h-[140px] sm:w-[100px] md:h-[140px] md:w-[100px]  flex justify-center items-center ${deck[index] ? "bg-transparent" : "border-black/60 bg-black/30 border-2 rounded-lg  shadow-md shadow-black"}`}>
                            {deck[index] ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => removeCardFromDeck(index)}
                                        className="absolute top-1 right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-600/90 text-[10px] font-bold text-white shadow-sm shadow-black/60 transition hover:bg-red-500 sm:h-6 sm:w-6 sm:text-xs"
                                        aria-label={`Remover ${deck[index].name} do deck`}
                                    >
                                        X
                                    </button>
                                    <img
                                        src={
                                            rulePositionCard(index,deck[index])
                                        }
                                        alt={deck[index].name}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </>
                            ) : index === 0 ? (
                                <img src="/images/cristal_de_evolucao.png" alt="" className="w-12" />
                            ) : index === 1 ? (
                                <img src="/images/cristal_campeao.png" alt="" className="w-12" />
                            ) : index === 2 ? (
                                <img src="/images/cristal_campeao_evolucao.png" alt="" className="w-12" />
                            ) : null}
                        </div>
                    ))}

                </div>
                <div className="w-full flex aling-center justify-center mt-5">
                    <AnalyzeDeckButton/>
                </div>
            </div>
        </div>
    )
}
