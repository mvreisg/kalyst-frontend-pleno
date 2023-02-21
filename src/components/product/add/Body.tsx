'use client'
import { useAppContext } from "@/context/context";
import Image from "next/image";
import { useState } from "react";

export default function Body(){
    const context = useAppContext();    
    const [disableImage, setDisableImage] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [paymentType, setPaymentType] = useState("Assinatura");
    const [paymentPeriod, setPaymentPeriod] = useState("Mensal"); 
    const [paymentPeriodChangeRequested, setPaymentPeriodChangeRequested] = useState(false);
    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2">
                <div className="mt-8">
                    <p className="text-xl font-bold">Informação do produto</p>
                    <p className="font-bold mt-2">Detalhes do produto</p>
                    <div className="flex justify-between space-x-4 space-y-4">
                        <div className="flex flex-col w-2/3">
                            <div className="mt-2">
                                <label htmlFor="nome">Nome
                                    <input onChange={(e) => {context.productBeenSaved.name = e.target.value}} className="w-full h-12 block border border-gray-400 rounded-lg px-4" id="nome" type="text"/>
                                </label>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="descricao">Descrição
                                    <textarea onChange={(e) => {context.productBeenSaved.description = e.target.value}} className="w-full h-48 block border border-gray-400 rounded-lg px-4 py-4" id="descricao"></textarea>
                                </label>                                    
                            </div>                                
                        </div>
                        <div className="flex flex-col w-1/3">
                            <div className="flex justify-between">
                                <p>Imagem</p>
                                <p className="rounded-lg bg-slate-300 text-slate-200 px-2 py-1">Opcional</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="imagem" className="relative flex justify-center items-center rounded-lg border-dashed border-2 border-gray-400 w-48 h-48 mt-2">                                    
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
                                        if (files){
                                            path = URL.createObjectURL(files[0]);
                                        }
                                        setDisableImage(path !== "");
                                        setImageURL(context.productBeenSaved.imageURL = path);                                        
                                    }} id="imagem" className="hidden" type="file"/>    
                                </label>
                            </div>                                                               
                        </div>                                                                 
                    </div>                        
                </div>
                <div className="mt-8">
                    <p className="text-xl font-bold">Informação do preço</p>
                    <p className="font-bold mt-2">Detalhes do preço</p>
                    <div className="flex justify-between space-x-4 space-y-4">
                        <div className="flex flex-col w-2/3">
                            <div className="mt-2">
                                <label htmlFor="preco">
                                    Preço
                                    <input onChange={(e) => {
                                        const value = e.target.value;
                                        let newString = "";
                                        for (let i = 0; i < value.length; i++){
                                            if (!isNaN(value[i]) || value.codePointAt(i) === 0x002E){
                                                newString += value[i];
                                            }
                                        }
                                        context.productBeenSaved.price = parseFloat(newString);                                        
                                    }} className="w-full h-12 block border border-gray-400 rounded-lg py-4 px-4" id="preco" type="text"/>
                                </label>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button onClick={(e) => {setPaymentType(context.productBeenSaved.paymentType = "Assinatura")}} className="border-2 border-gray-400 rounded-lg p-2 hover:border-sky-800">Assinatura</button>
                                <button onClick={(e) => {setPaymentType(context.productBeenSaved.paymentType = "Uma Vez")}} className="border-2 border-gray-400 rounded-lg p-2 hover:border-sky-800">Uma Vez</button>                                    
                            </div>                              
                            <div className={`mt-4 ${paymentType === "Assinatura" ? "" : "hidden"}`}>
                                <label htmlFor="image">
                                    Período de pagamento
                                    <button onClick={() => {
                                        if (paymentPeriodChangeRequested){
                                            setPaymentPeriodChangeRequested(false);
                                        }
                                        else{
                                            setPaymentPeriodChangeRequested(true);
                                        }                                        
                                    }} className="w-full h-12 block border border-gray-400 rounded-lg px-2">
                                        <div className="flex justify-between">
                                            <span>{paymentPeriod}</span>
                                            <span>&darr;</span>
                                        </div>                                        
                                    </button>
                                    <div className={paymentPeriodChangeRequested ?  "flex flex-col block border border-gray-400" : "hidden"}>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => {setPaymentPeriod("Semanal"); setPaymentPeriodChangeRequested(false);}}>Semanal</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => {setPaymentPeriod("Mensal"); setPaymentPeriodChangeRequested(false);}}>Mensal</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => {setPaymentPeriod("Trimestral"); setPaymentPeriodChangeRequested(false);}}>Trimestral</button>
                                        </div>                                        
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => {setPaymentPeriod("Semestral"); setPaymentPeriodChangeRequested(false);}}>Semestral</button>
                                        </div>
                                        <div className="w-full h-12 px-2 py-2">
                                            <button onClick={() => {setPaymentPeriod("Anual"); setPaymentPeriodChangeRequested(false);}}>Anual</button>
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