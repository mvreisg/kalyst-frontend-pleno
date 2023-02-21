'use client'
import { useAppContext } from '@/context/context';
import Link from 'next/link';

export default function Header() {
    const context = useAppContext();
    const save = (e) => {
        fetch('http://localhost:3000/api/product/add', {
            method: "POST", body: JSON.stringify({
                sku: (Math.random() * 1000000000).toString(),
                name: context.productBeenSaved.name,
                description: context.productBeenSaved.description,
                paymentType: context.productBeenSaved.paymentType,
                price: context.productBeenSaved.price,
                imageURL: context.productBeenSaved.imageURL,
                checkoutURL: "https://www.google.com",
                action: "Editar"
            })
        });
    }
    return (
        <div className="relative w-screen">
            <div className="relative flex justify-between items-center w-full p-4">
                <div>
                    <Link href="/Product/List">
                        <button className="text-[14px] text-[#202020] font-bold">&#x2715;</button>
                    </Link>
                    <span className="ml-6 mr-4 border-[1px] border-[#D1D1D1] w-[1px] h-[25px]"></span>
                    <span className="text-[14px]">Adicionar um produto</span>
                </div>
                <Link href="/Product/List">
                    <button className="rounded-[5px] bg-[#6159FB] text-white text-[14px] px-[10px] py-[6px]" onClick={save}>
                        Salvar produto
                    </button>
                </Link>
            </div>
            <div className="absolute bottom-0 w-screen h-[1px] border-[1px] border-gray-200"></div>
        </div>
    );
}