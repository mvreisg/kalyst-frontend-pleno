'use client'
import { useAppContext } from "@/context/context";
import Image from "next/image";
import { useState } from "react";

export default function Body() {
    const context = useAppContext();
    const [disableImage, setDisableImage] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [paymentType, setPaymentType] = useState("Assinatura");
    const [paymentPeriod, setPaymentPeriod] = useState("Mensal");
    const [paymentPeriodChangeRequested, setPaymentPeriodChangeRequested] = useState(false);
    const [price, setPrice] = useState(0.00);
    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2">
                <div className="mt-8">
                    <p className="text-[20px] font-bold text-[#202020]">Informação do produto</p>
                    <p className="text-[14px] font-bold text-[#202020] mt-2">Detalhes do produto</p>
                    <div className="flex justify-between space-x-4 space-y-4">
                        <div className="flex flex-col w-2/3">
                            <div className="mt-2">
                                <label className="text-[#202020] text-[14px]" htmlFor="nome">Nome
                                    <input onChange={(e) => { context.productBeenSaved.name = e.target.value }} className="w-full h-12 block border-[1px] border-[#8B8B8B] rounded-[5px] px-2 py-2" id="nome" type="text" />
                                </label>
                            </div>
                            <div className="mt-2">
                                <label className="text-[#202020] text-[14px]" htmlFor="descricao">Descrição
                                    <textarea onChange={(e) => { context.productBeenSaved.description = e.target.value }} className="w-full h-48 block border-[1px] border-[#8B8B8B] rounded-[5px] px-2 py-2" id="descricao"></textarea>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3">
                            <div className="flex justify-between">
                                <p className="text-[#202020] text-[14px]">Imagem</p>
                                <p className="rounded-[5px] bg-[#ECECEC] text-[#A9A8A8] px-[12px] py-[1px] text-[14px]">Opcional</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="imagem" className="relative flex justify-center items-center rounded-lg border-dashed border-[1px] border-[#8B8B8B] w-[190px] h-[190px] mt-2">
                                    <Image alt="Imagem" src={imageURL} width={200} height={200} className={`${imageURL === "" ? "hidden" : ""}`}>
                                    </Image>
                                    <div className={`flex justify-between items-center font-bold text-indigo-400 ${imageURL === "" ? "" : "hidden"}`}>
                                        <p>&uarr; Adicionar</p>
                                    </div>
                                    <button className={`absolute flex justify-between items-center font-bold text-black ${imageURL === "" ? "hidden" : ""}`}
                                        onClick={() => {
                                            setImageURL(context.productBeenSaved.imageURL = "");
                                            setDisableImage(false);
                                        }}>
                                        <p>&darr; Remover</p>
                                    </button>
                                    <input disabled={disableImage} onClick={(e) => e.currentTarget.value = ""} onChange={(e) => {
                                        let path = "";
                                        const files = e.target.files;
                                        console.log(e.target.files?.length);
                                        if (files) {
                                            path = URL.createObjectURL(files[0]);
                                        }
                                        setDisableImage(path !== "");
                                        setImageURL(context.productBeenSaved.imageURL = path);
                                    }} id="imagem" className="hidden" type="file" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-[20px] font-bold text-[#202020]">Informação do preço</p>
                    <p className="text-[14px] font-bold text-[#202020] mt-2">Detalhes do preço</p>
                    <div className="flex justify-between space-x-4 space-y-4">
                        <div className="flex flex-col w-2/3">
                            <div className="mt-2">
                                <label className="text-[#202020] text-[14px]" htmlFor="preco">
                                    Preço
                                    <input value={`R$ ${price}`} onChange={(e) => {
                                        const value = e.target.value;
                                        let newString = "";
                                        if (value.length > 0) {
                                            let dot = false;
                                            for (let i = 0; i < value.length; i++) {
                                                if (value.codePointAt(i) === 46) {
                                                    if (!dot) {
                                                        dot = true;
                                                        newString += value[i];
                                                        continue;
                                                    }
                                                    else {
                                                        continue;
                                                    }
                                                }
                                                if (!isNaN(value[i])) {
                                                    newString += value[i];
                                                }
                                            }
                                        }
                                        else {
                                            newString = "0.00";
                                        }
                                        setPrice(context.productBeenSaved.price = parseFloat(newString));
                                    }} className="w-full h-12 block border-[1px] border-[#8B8B8B] rounded-[5px] px-2 py-2" id="preco" type="text" />
                                </label>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button onClick={(e) => { setPaymentType(context.productBeenSaved.paymentType = "Assinatura") }} className={`${paymentType === "Assinatura" ? "border-[#6159FB]" : "border-[#8B8B8B]"} border-[1px] px-[16px] py-[6px] rounded-[5px] text-[#000000] text-[14px]`}>Assinatura</button>
                                <button onClick={(e) => { setPaymentType(context.productBeenSaved.paymentType = "Uma Vez") }} className={`${paymentType === "Uma Vez" ? "border-[#6159FB]" : "border-[#8B8B8B]"} border-[1px] px-[16px] py-[6px] rounded-[5px] text-[#000000] text-[14px]`}>Uma Vez</button>
                            </div>
                            <div className={`mt-4 ${paymentType === "Assinatura" ? "" : "hidden"}`}>
                                <label className="text-[#202020] text-[14px]" htmlFor="image">
                                    Período de pagamento
                                    <button onClick={() => {
                                        if (paymentPeriodChangeRequested) {
                                            setPaymentPeriodChangeRequested(false);
                                        }
                                        else {
                                            setPaymentPeriodChangeRequested(true);
                                        }
                                    }} className="w-full h-12 block border border-gray-400 rounded-lg px-2">
                                        <div className="relative flex justify-between">
                                            <span className="block absolute top-[-10px] left-0">{paymentPeriod}</span>
                                            <span className="block absolute top-[-20px] right-0 text-[28px]">&darr;</span>
                                        </div>
                                    </button>
                                    <div className={paymentPeriodChangeRequested ? "flex flex-col block border border-gray-400" : "hidden"}>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => { setPaymentPeriod("Semanal"); setPaymentPeriodChangeRequested(false); }}>Semanal</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => { setPaymentPeriod("Mensal"); setPaymentPeriodChangeRequested(false); }}>Mensal</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => { setPaymentPeriod("Trimestral"); setPaymentPeriodChangeRequested(false); }}>Trimestral</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => { setPaymentPeriod("Semestral"); setPaymentPeriodChangeRequested(false); }}>Semestral</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => { setPaymentPeriod("Anual"); setPaymentPeriodChangeRequested(false); }}>Anual</button>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}