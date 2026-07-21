"use client";
import { useEffect, useRef } from "react";
import { AnalyzeDeckButton } from "@/features/analise-rei";
import { useCreateDeck } from "@/features/analise-rei";
import { useDroppable } from "@dnd-kit/react";
import { DECK_DROP_ID } from "@/features/analise-rei/hook/useDeckWithCards";
export default function DeckUsuario() {
  const box = Array.from({ length: 8 });
  const {
    deck,
    removeCardFromDeck,
    rulePositionCard,
    cardSelect,
    setCardSelect,
    changeCardSlot2,
    changerCardSlot2,
  } = useCreateDeck();
  const containerRef = useRef(null);
  const { ref: dropRef, isDropTarget } = useDroppable({
    id: DECK_DROP_ID,
    type: "deck",
    accept: "card",
  });

  useEffect(() => {
    function handleClickFora(event) {
      if (
        containerRef?.current &&
        !containerRef.current.contains(event.target)
      ) {
        setCardSelect(null);
      }
    }

    document.addEventListener("mousedown", handleClickFora);

    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  return (
    <div className="h-auto w-full ">
      <div className="mx-auto w-full max-w-140 rounded-lg  p-4 sm:p-5 md:p-6">
        <div
          ref={(node) => {
            containerRef.current = node;
            dropRef(node);
          }}
          className={`grid grid-cols-4 gap-3 rounded-xl transition-all duration-200 sm:grid-cols-4 sm:gap-4 md:gap-x-9 md:gap-y-6 ${
            isDropTarget ? "bg-amber-300/10 ring-2 ring-amber-300" : ""
          }`}
        >
          {box.map((_, index) => (
            <div
              key={index}
              className={`relative h-[80px] w-[60px] sm:h-[140px] sm:w-[100px] md:h-[140px] md:w-[100px]  flex justify-center items-center ${deck[index] ? "bg-transparent" : "border-black/60 bg-black/30 border-2 rounded-lg  shadow-md shadow-black"}`}
            >
              {deck[index] ? (
                <div
                  onClick={() => setCardSelect(index)}
                  className={`rounded-xl flex flex-col justify-center items-center  cursor-pointer ${cardSelect == index ? "border-black/60 bg-black/30 border-2 rounded-lg  shadow-md shadow-black" : "bg-transparent"}`}
                >
                  <img
                    src={rulePositionCard(index, deck[index])}
                    alt={deck[index].name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                  <div
                    className={`w-full overflow-hidden transition-all duration-300 ease-out ${
                      cardSelect === index
                        ? "max-h-20 opacity-100 mt-0.5"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="flex justify-center items-center gap-0.5">
                      {index === 2 &&
                        Object.values(deck[index].iconUrls).filter(
                          (value) => value != null,
                        ).length > 2 && (
                          <button
                            className={`w-full flex justify-center p-1 rounded-md cursor-pointer ${changerCardSlot2 === "hero" ? "bg-mod-evolution" : "bg-mod-hero"} border border-black`}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeCardSlot2(deck[index]);
                            }}
                          >
                            {changerCardSlot2 === "hero" ? (
                              <img
                                src="/images/cristal_de_evolucao.png"
                                alt="campeao"
                                className="w-6 h-5"
                              />
                            ) : (
                              <img
                                src="/images/cristal_campeao.png"
                                alt="campeao"
                                className="w-6 h-5"
                              />
                            )}
                          </button>
                        )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeCardFromDeck(index);
                        }}
                        className={`text-[12px] w-full p-1 pt-2 rounded-md transition-all duration-300 ease-out bg-red-500 cursor-pointer border border-black ${
                          cardSelect === index
                            ? "translate-y-0 scale-100"
                            : "-translate-y-2 scale-95"
                        }`}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ) : index === 0 ? (
                <img
                  src="/images/cristal_de_evolucao.png"
                  alt=""
                  className="w-12"
                />
              ) : index === 1 ? (
                <img
                  src="/images/cristal_campeao.png"
                  alt=""
                  className="w-12"
                />
              ) : index === 2 ? (
                <img
                  src="/images/cristal_campeao_evolucao.png"
                  alt=""
                  className="w-12"
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="w-full flex aling-center justify-center mt-5">
          <AnalyzeDeckButton />
        </div>
      </div>
    </div>
  );
}
