'use client'
import { useState } from "react";

export default function Tabs() {
    const [selectedButton, setSelectedButton] = useState("Todos");
    return (
        <div className="flex relative">
            <div className="flex space-x-8">
                <button
                    onClick={() => { setSelectedButton("Todos") }}
                    className={`pb-1 ${selectedButton === "Todos" ? "border-b-[3px] pb-1 border-[#6159FB] text-[#6159FB]" : ""} font-normal z-[2]`}>
                    Todos
                </button>
                <button
                    onClick={() => { setSelectedButton("Disponivel") }}
                    className={`pb-1 ${selectedButton === "Disponivel" ? "border-b-[3px] pb-1 border-[#6159FB] text-[#6159FB]" : ""} font-normal z-[2]`}>
                    Disponível
                </button>
            </div>
            <div className="absolute bottom-[1px] border-b-[1px] border-[#D1D1D1] w-[975px] z-[1]"></div>
        </div>
    );
}