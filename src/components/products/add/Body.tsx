import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Body(){
    const [sku, setSKU] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [price, setPrice] = useState(0.00);
    const [checkoutURL, setCheckoutURL] = useState("");
    const [action, setAction] = useState("");    
    return (
        <>
            <div className="w-screen p-6 flex justify-between border-b-[1px] border-gray-200">
                <div>
                    <Link to="/">
                        <span className="text-2xl">&#x2715;</span>
                    </Link>
                    <div className="inline-block px-2">
                        <span className="border-l-[1px] border-gray-200"></span>
                    </div>                
                    <span className="text-xl">Adicionar um produto</span>
                </div>
                <Link to="/">
                    <button className="rounded-lg text-white bg-sky-500 p-2" onClick={(e) => {
                        fetch('/api/products/', {method: "POST", body: JSON.stringify({
                            sku: sku,
                            productName: productName,
                            description: description,
                            paymentType: paymentType,
                            price: price,
                            checkoutURL: checkoutURL,
                            action: action
                        })}
                    )}}>
                        Salvar produto
                    </button>
                </Link>                
            </div>
            <div className="flex justify-center h-screen">
                <div className="w-1/2">
                    <div className="mt-8">
                        <p className="text-xl font-bold">Informação do produto</p>
                        <p className="font-bold mt-2">Detalhes do produto</p>
                        <div className="flex justify-between space-x-4 space-y-4">
                            <div className="flex flex-col w-2/3">
                                <div className="mt-2">
                                    <label htmlFor="nome">Nome
                                        <input onChange={(e) => {setProductName(e.target.value)}} className="w-full h-12 block border border-gray-400 rounded-lg" id="nome" type="text"/>
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="descricao">Descrição
                                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="w-full h-48 block border border-gray-400 rounded-lg" id="descricao"></textarea>
                                    </label>                                    
                                </div>                                
                            </div>
                            <div className="flex flex-col w-1/3">
                                <div className="flex justify-between">
                                    <p>Imagem</p>
                                    <p className="rounded-lg bg-slate-300 text-slate-200 px-2 py-1">Opcional</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="imagem" className="flex justify-center items-center rounded-lg border-dashed border-2 border-gray-400 w-48 h-48 mt-2">
                                        <div className="flex justify-between items-center font-bold text-indigo-400">
                                            <p>&uarr; Adicionar</p>
                                        </div>                                        
                                        <input id="imagem" className="hidden" type="file"/>    
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
                                        <input onChange={(e) => {setPrice(parseFloat(e.target.value.toString()))}} className="w-full h-12 block border border-gray-400 rounded-lg" id="preco" type="text"/>
                                    </label>
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <button onChange={(e) => {setPaymentType("Assinatura")}} className="border-2 border-gray-400 rounded-lg p-2 hover:border-sky-800">Assinatura</button>
                                    <button onChange={(e) => {setPaymentType("Uma Vez")}} className="border-2 border-gray-400 rounded-lg p-2 hover:border-sky-800">Uma Vez</button>                                    
                                </div>                              
                                <div className="mt-4">
                                    <label htmlFor="image">
                                        Período de pagamento
                                        <button className="w-full h-12 block border border-gray-400 rounded-lg px-2">
                                            <div className="flex justify-between">
                                                <span>Mensal</span>
                                                <span>&darr;</span>
                                            </div>
                                        </button>
                                    </label>                            
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>        
    );
}