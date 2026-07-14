'use client'

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import {useCards} from "../hook/useCards"
import {useCreateDeck} from "../hook/useDeckWithCards"

const CARD_GRADIENTS: Record<string, string> = {
  common:
    "linear-gradient(90deg, rgba(0, 116, 189, 1) 0%, rgba(0, 160, 252, 1) 33%, rgba(0, 183, 255, 1) 63%, rgba(0, 164, 196, 1) 100%)",
  rare:
    "linear-gradient(90deg, rgba(255, 205, 97, 1) 0%, rgba(255, 175, 15, 1) 44%, rgba(204, 136, 0, 1) 81%)",
  epic:
    "linear-gradient(90deg, rgba(211, 112, 250, 1) 0%, rgba(195, 31, 255, 1) 47%, rgba(151, 0, 196, 1) 81%)",
  legendary:
    "linear-gradient(146deg, rgba(46, 242, 177, 1) 0%, rgba(214, 182, 227, 1) 47%, rgba(245, 0, 224, 1) 81%)",
  champion:
    "linear-gradient(146deg, rgba(255, 253, 148, 1) 0%, rgba(250, 204, 0, 1) 55%, rgba(196, 160, 0, 1) 87%)",
};
function getCardBorderStyle(rarity: string): CSSProperties {
  return {
    backgroundImage: CARD_GRADIENTS[rarity] ?? CARD_GRADIENTS.common,
    padding: "2px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };
}

export function Cards() {
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {cards,getImagemCard} = useCards()
  const {addingCardInDeck} = useCreateDeck();

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setCartaSelecionada(null);
      }
    }

    document.addEventListener('mousedown', handleClickFora);

    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8 w-full h-full flex-wrap overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-amber-300 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb:hover]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-2x gap-y-4"
    >
    {cards.map((item) => (
      <div 
        key={item.id} 
        onClick={() => setCartaSelecionada(item.id)}
        className={`flex flex-col items-center justify-center p-1 pb-2 rounded-xl w-17.5 sm:w-30 cursor-pointer transition-all duration-300 ease-out transform-gpu ${
          cartaSelecionada === item.id
            ? "bg-slate-950/70 shadow-lg shadow-blue-500/30 scale-[1.03]"
            : "bg-transparent hover:bg-blue-500/10 hover:scale-[1.01]"
        }`}
      >
        <div className="relative">
          {cartaSelecionada === item.id && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-md"
              style={getCardBorderStyle(item.rarity)}
            />
          )}
          <div className='w-4 top-2 sm:w-6 absolute z-1 sm:top-4'>
            <img src="/images/elixir.png" alt="" className="" />
            <span className='absolute bottom-0 left-1.5 sm:left-2 text-gray-100 text-[12px] sm:text-[16px] z-2'>{item.elixirCost}</span>
          </div>
          <img
            src={getImagemCard(item)}
            alt=""
            className={`relative w-15 h-22.5 sm:w-22.5 sm:h-37.5 md:w-27.5 md:h-38.75 rounded-md transition-transform duration-300 ease-out ${
              cartaSelecionada === item.id ? "-translate-y-1" : ""
            }`}
          />
        </div>

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-out ${
            cartaSelecionada === item.id
              ? "max-h-20 opacity-100 mt-0.5"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              addingCardInDeck(item, e);
            }}
            className={`text-[12px] bg-linear-to-t from-[#D49F00] via-[#DEAC18] to-[#FFC619] w-full p-1 pt-2 rounded-md transition-all duration-300 ease-out cursor-pointer ${
              cartaSelecionada === item.id
                ? "translate-y-0 scale-100"
                : "-translate-y-2 scale-95"
            }`}
          >
            Adicionar
          </button>
        </div>
      </div>
    ))}
  </div>
  );
}
