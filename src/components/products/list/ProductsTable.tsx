import { useState, useEffect } from 'react'
import AddCard from './AddCard';

export default function ProductsTable(){
    const [state, setState] = useState([])    
    fetch('/api/products/').then((res) => res.json().then((json) => { setState(before => before = json) }));
    let elements = [];
    elements.push(
        (<div className="grid grid-cols-7">
            <div>SKU</div>
            <div>Produto</div>
            <div>Descrição</div>
            <div>Pagamento</div>
            <div>Preço</div>
            <div>Checkout</div>
            <div>Ação</div>
        </div>)
    );
    if (state.length === 0){
        return (<AddCard/>);
    }
    state.forEach((product: any) => {
        elements.push(
            (<div className="grid grid-cols-7">
                <div>{product.sku}</div>
                <div className="font-bold">{product.productName}</div>
                <div>{product.description}</div>
                <div>{product.paymentType}</div>
                <div>R$ {product.price}</div>
                <div>{product.checkoutURL}</div>
                <div className="text-sky-400">{product.action}</div>            
            </div>)
        );
    });
    return (
        <div className="grid p-2 mt-2">
            {elements}
        </div>
    );
}