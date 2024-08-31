import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;

    const [cartProducts, setCartProducts] = useState([]);

    const addProduct = (productId) => {
        setCartProducts(prev => [
            ...prev, productId
        ])
    };

    useEffect(() => {
        if (cartProducts.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        const cartItemFromLocalStorage = ls ? ls.getItem('cart') : "";

        if (cartItemFromLocalStorage) {
            setCartProducts(JSON.parse(cartItemFromLocalStorage));
        }
    }, []);

    return <CartContext.Provider value={{
        cartProducts,
        setCartProducts,
        addProduct
    }}>
        {children}
    </CartContext.Provider>
}