'use client'

import { useState } from 'react';


export function Cards() {
  const cartas = Array.from({ length: 120 });
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8 w-full h-full flex-wrap overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-amber-300 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb:hover]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-2x gap-y-4">
    {cartas.map((_, index:number) => (
      <div 
        key={index} 
        onClick={() => setCartaSelecionada(index)}
        className= {`flex flex-col items-center justify-center p-1 pb-2  rounded-md w-[70px] sm:w-[120px] ${cartaSelecionada == index ? "bg-blue-500" : "bg-transparent"}`}
      >
        <img
          src="/images/carta.png"
          alt=""
          className="w-[60px] h-[90px] sm:w-[90px] sm:h-[150px] md:w-[110px] md:h-[155px] rounded-md"
        />
        
        {cartaSelecionada === index && (
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              console.log("Adicionado à mochila/carrinho!");
            }}
            className="text-[12px] bg-gradient-to-t from-[#FFC619] to-[#DEAC18] to-[#8F7527] mt-[2px] w-full p-1 pt-2 rounded-md animate-fade-in"
          >
            Adicionar
          </button>
        )}
      </div>
    ))}
  </div>
  );
}
