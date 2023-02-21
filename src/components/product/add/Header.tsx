'use client'
import { useAppContext } from '@/context/context';
import Link from 'next/link';

export default function Header(){
    const context = useAppContext();
    const save = (e) => {
        fetch('http://localhost:3000/api/product/add', { method: "POST", body: JSON.stringify({
            sku: (Math.random() * 1000000000).toString(),
            name: context.productBeenSaved.name,
            description: context.productBeenSaved.description,
            paymentType: context.productBeenSaved.paymentType,
            price: context.productBeenSaved.price,
            imageURL: context.productBeenSaved.imageURL,
            checkoutURL: "https://www.google.com",
            action: "Editar"
        })});
    }
    return (
        <div className="w-screen p-6 flex justify-between border-b-[1px] border-gray-200">
            <div>
                <Link href="/Product/List">
                    <button className="text-2xl">&#x2715;</button>                
                </Link>                
                <div className="inline-block px-2">
                    <span className="border-l-[1px] border-gray-200"></span>
                </div>                
                <span className="text-xl">Adicionar um produto</span>
            </div>     
            <Link href="/Product/List?action=refresh">
                <button className="rounded-lg text-white bg-sky-500 p-2" onClick={save}>
                    Salvar produto
                </button>                                
            </Link>                         
        </div>
    );
}