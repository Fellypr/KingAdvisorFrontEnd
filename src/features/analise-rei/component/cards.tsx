'use client'

import { useEffect, useRef, useState } from 'react';


export function Cards() {
  const cartas = Array.from({ length: 120 });
  const [cartaSelecionada, setCartaSelecionada] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    {cartas.map((_, index:number) => (
      <div 
        key={index} 
        onClick={() => setCartaSelecionada(index)}
        className={`flex flex-col items-center justify-center p-1 pb-2 rounded-md w-[70px] sm:w-[120px] cursor-pointer transition-all duration-300 ease-out transform-gpu ${
          cartaSelecionada === index
            ? "bg-blue-800/70 shadow-lg shadow-blue-500/30 scale-[1.03]"
            : "bg-transparent hover:bg-blue-500/10 hover:scale-[1.01]"
        }`}
      >
        <img
          src="/images/carta.png"
          alt=""
          className={`w-[60px] h-[90px] sm:w-[90px] sm:h-[150px] md:w-[110px] md:h-[155px] rounded-md transition-transform duration-300 ease-out ${
            cartaSelecionada === index ? "-translate-y-1" : ""
          }`}
        />

        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-out ${
            cartaSelecionada === index
              ? "max-h-20 opacity-100 mt-[2px]"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              console.log("Adicionado à mochila/carrinho!");
            }}
            className={`text-[12px] bg-gradient-to-t from-[#D49F00] via-[#DEAC18] to-[#FFC619] w-full p-1 pt-2 rounded-md transition-all duration-300 ease-out ${
              cartaSelecionada === index
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
