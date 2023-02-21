'use client'
import { useState } from "react";

export default function Tabs(){
    const [selectedButton, setSelectedButton] = useState("Todos");
    return (
        <div className="flex space-x-8 border-b-[1px] border-blue-200">
            <button 
                onClick={() => {setSelectedButton("Todos")}} 
                className={`pb-1 ${selectedButton === "Todos" ? "border-b-2 pb-1 border-blue-800 text-blue-800 font-bold" : "" } hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold`}>
                Todos   
            </button>      
            <button 
                onClick={() => {setSelectedButton("Disponivel")}} 
                className={`pb-1 ${selectedButton === "Disponivel" ? "border-b-2 pb-1 border-blue-800 text-blue-800 font-bold" : "" } hover:border-b-2 hover:pb-1 hover:border-blue-800 hover:text-blue-800 hover:font-bold`}>
                Disponível
            </button>                                     
        </div>     
    );
}