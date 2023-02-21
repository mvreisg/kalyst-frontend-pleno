'use client'
import { useState } from "react";

export default function Nav(){
    const [selectedButton, setSelectedButton] = useState("Todos os Produtos");
    return (
        <div>
            <p className="font-bold mb-4 text-xl">Produtos</p>            
            <div className="border-l-[1px] border-blue-100">
                <button onClick={() => {setSelectedButton("Todos os Produtos")}} className={`pb-1 ${selectedButton === "Todos os Produtos" ? "text-blue-400 my-2 border-l-2 border-blue-400" : "" } block pl-2`}>
                    Todos os Produtos
                </button>
                <button onClick={() => {setSelectedButton("Cupons")}} className={`pb-1 ${selectedButton === "Cupons" ? "text-blue-400 my-2 border-l-2 border-blue-400" : "" } block pl-2`}>
                    Cupons
                </button>
                <button onClick={() => {setSelectedButton("Taxas")}} className={`pb-1 ${selectedButton === "Taxas" ? "text-blue-400 my-2 border-l-2 border-blue-400" : "" } block pl-2`}>
                    Taxas
                </button>                
            </div>
        </div>        
    );
}