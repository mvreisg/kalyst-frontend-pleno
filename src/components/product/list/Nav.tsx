'use client'
import { useState } from "react";

export default function Nav() {
    const [selectedButton, setSelectedButton] = useState("Todos os Produtos");
    return (
        <div>
            <p className="font-bold mb-4 text-[22px]">Produtos</p>
            <div className="relative">
                <div className="absolute z-[2]">
                    <button
                        onClick={() => { setSelectedButton("Todos os Produtos") }}
                        className={`${selectedButton === "Todos os Produtos" ? "text-[#6159FB] border-l-[3px] border-[#6159FB] font-semibold pl-[9px]" : "font-normal pl-[9px]"} text-[17px]`}>
                        Todos os Produtos
                    </button>
                </div>
                <div className="absolute z-[2] top-[40px]">
                    <button
                        onClick={() => { setSelectedButton("Cupons") }}
                        className={`${selectedButton === "Cupons" ? "text-[#6159FB] border-l-[3px] border-[#6159FB] font-semibold pl-[9px]" : "font-normal pl-[9px]"} text-[17px]`}>
                        Cupons
                    </button>
                </div>
                <div className="absolute z-[2] top-[70px]">
                    <button
                        onClick={() => { setSelectedButton("Taxas") }}
                        className={`${selectedButton === "Taxas" ? "text-[#6159FB] border-l-[3px] border-[#6159FB] font-semibold pl-[9px]" : "font-normal pl-[9px]"} text-[17px]`}>
                        Taxas
                    </button>
                </div>
                <div className="absolute left-[1px] border-l-[1px] border-[#D1D1D1] w-[1px] h-[119px] z-[1]"></div>
            </div>
        </div>
    );
}