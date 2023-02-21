'use client'
import { useAppContext } from '@/context/context';
import { useState } from 'react'
import AddCard from './AddCard';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductsTable() {
    const params = useSearchParams();
    const action = params.get('action');
    const [state, setState] = useState([]);
    const [fetched, setFetched] = useState(false);
    const context = useAppContext();
    if ((action === "refresh" && !fetched) || !fetched) {
        if (!context.clientRequestedProductList) {
            context.clientRequestedProductList = true;
            fetch('http://localhost:3000/api/product/list')
                .then((res) => res.json()
                    .then((json) => {
                        setState(json);
                        setFetched(true);
                    }));
        }
        return (<AddCard />);
    }
    else {
        context.clientRequestedProductList = false;
        let elements = [];
        elements.push(
            (<div key="header" className="grid grid-cols-7">
                <div key="SKU">SKU</div>
                <div key="Name">Produto</div>
                <div key="Description">Descrição</div>
                <div key="PaymentType">Pagamento</div>
                <div key="Price">Preço</div>
                <div key="CheckoutURL">Checkout</div>
                <div key="Action">Ação</div>
            </div>)
        );
        state.forEach((product: any, index: number) => {
            elements.push(
                (<div key={index} className="grid grid-cols-7">
                    <div key={`${index}-${product.sku}`}>{product.sku}</div>
                    <div key={`${index}-${product.name}`} className="font-bold">{product.name}</div>
                    <div key={`${index}-${product.description}`}>{product.description}</div>
                    <div key={`${index}-${product.paymentType}`}>{product.paymentType}</div>
                    <div key={`${index}-${product.price}`}>R$ {product.price}</div>
                    <div key={`${index}-${product.checkoutURL}`}>{product.checkoutURL}</div>
                    <div key={`${index}-${product.action}`} className="text-sky-400">{product.action}</div>
                </div>)
            );
        });
        return (
            <div key="main" className="grid p-2 mt-2">
                {elements}
            </div>
        );
    }
}