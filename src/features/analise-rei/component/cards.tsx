'use client'

import { useEffect, useRef, useState } from 'react';
import {useCards} from "../hook/useCards"

export function Cards() {
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {cards,getImagemCard,getTypeCard} = useCards()

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
  console.log(cards);
  
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
            ? `${getTypeCard(item)} shadow-lg shadow-blue-500/30 scale-[1.03]`
            : "bg-transparent hover:bg-blue-500/10 hover:scale-[1.01]"
        }`}
      >
        <img
          src={getImagemCard(item)}
          alt=""
          className={`w-15 h-22.5 sm:w-22.5 sm:h-37.5 md:w-27.5 md:h-38.75 rounded-md transition-transform duration-300 ease-out ${
            cartaSelecionada === item.id ? "-translate-y-1" : ""
          }`}
        />

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
              console.log("Adicionado à mochila/carrinho!");
            }}
            className={`text-[12px] bg-linear-to-t from-[#D49F00] via-[#DEAC18] to-[#FFC619] w-full p-1 pt-2 rounded-md transition-all duration-300 ease-out ${
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
