'use client'
import { createContext, useContext } from 'react';

type Product = {
    sku: string,
    name: string,
    description: string,
    paymentType: string,
    price: number,
    imageURL: string,
    checkoutURL: string,
    action: string
}

type Context = {
    productBeenSaved: Product;
    clientRequestedProductList: boolean;
    refreshProductsTable: boolean;
}

const defaultContext: Context = {
    productBeenSaved: {
        sku: "",
        name: "",
        description: "",
        paymentType: "",
        price: 0.00,
        imageURL: "",
        checkoutURL: "",
        action: ""
    },
    clientRequestedProductList: false,
    refreshProductsTable: false
}

const AppContext = createContext<Context>(defaultContext);

export function AppWrapper({ children }) {
    const context: Context = defaultContext;
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    return useContext(AppContext);
}