'use client'
import { useState } from 'react'
import AddCard from './AddCard';

export default function ProductsTable() {
    const [json, setJSON] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [fetching, setFetching] = useState(false);
    if (!fetching && !fetched) {
        fetch('http://localhost:3000/api/product/list')
            .then((res) => res.json()
                .then((json) => {
                    setJSON(json);
                    setFetched(true);
                }));
        setFetching(true);
    }
    else {
        if (!fetched || json.length === 0) {
            return (<AddCard />);
        }
        else {
            let elements = [];
            elements.push(
                (<div key="header" className="grid grid-cols-7 pb-2">
                    <div key="SKU">SKU</div>
                    <div key="Name">Produto</div>
                    <div key="Description">Descrição</div>
                    <div key="PaymentType">Pagamento</div>
                    <div key="Price">Preço</div>
                    <div key="CheckoutURL">Checkout</div>
                    <div key="Action">Ação</div>
                </div>)
            );
            json.data.forEach((product: any, index: number) => {
                elements.push(
                    (<div key={index} className="grid grid-cols-7">
                        <div key={`${index}-${product.sku}-1`}>{product.sku}</div>
                        <div key={`${index}-${product.name}-2`} className="font-bold">{product.name}</div>
                        <div key={`${index}-${product.description}-3`}>{product.description}</div>
                        <div key={`${index}-${product.paymentType}-4`}>{product.paymentType}</div>
                        <div key={`${index}-${product.price}-5`}>R$ {product.price}</div>
                        <div key={`${index}-${product.checkoutURL}-6`}>{product.checkoutURL}</div>
                        <div key={`${index}-${product.action}-7`} className="text-sky-400">{product.action}</div>
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
}
