'use client'

import {createContext, useContext, useEffect, useState} from 'react'
import { Product } from '../lib/products'

type CartItem = Product & {
    qty: number
}

type CartContextType = {
    cart: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    updateQty: (product: Product, operation: 'minus' | 'add') => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        setCart(storedCart)
    }, [])

    const addToCart = (product: Product) => {
        const storedCart = [...cart, {...product, qty: 1}]

        setCart(storedCart)
        localStorage.setItem("cart", JSON.stringify(storedCart))
    }

    const removeFromCart = (product: Product) => {
        const storedCart = cart.filter((item) => item.id !== product.id)

        setCart(storedCart)
        localStorage.setItem("cart", JSON.stringify(storedCart))
    }

    const updateQty = (
        product: Product,
        operation: 'minus' | 'add'
    ) => {
        const storedCart = cart
            .map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        qty: operation === 'minus' ? item.qty - 1 : item.qty + 1
                    }
                }

                return item
            })
            .filter((item) => item.qty > 0)

        setCart(storedCart)
        localStorage.setItem("cart", JSON.stringify(storedCart))
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQty
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used inside CartProvider")
    }

    return context
}