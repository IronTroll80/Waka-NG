'use client'

import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react'
import {useCart} from '../context/CartContext'
import type {Product} from '../lib/products'
import {getProductImage} from '../lib/products'

interface Props {
    product: Product
}

export default function ProductCard({product}: Props){

    const [isHovered, setIsHovered] = useState(false)

    const {cart, addToCart, removeFromCart, updateQty} = useCart()

    const cartProduct = cart.find((item) => item.id === product.id)

    const quantity = cartProduct?.qty || 0

    const handleCart = () => {
        if (quantity > 0) {
            removeFromCart(product)
        } else {
            addToCart(product)
        }
    }

    const handleQty = (operation: 'minus' | 'add') => {
        if (quantity === 0) {
            return
        }

        updateQty(product, operation)
    }

    const isControlsVisible = isHovered || quantity > 0

    const img = getProductImage(product.slug)

    return (
        <div
            className="flex w-full cursor-pointer flex-col gap-3 max-sm:gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/shop/${product.slug}`}>
                <div className="relative aspect-square w-full overflow-hidden bg-[var(--light-accent)]">
                    <Image
                        src={img}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        fill
                        sizes="(max-width: 500px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                </div>
            </Link>

                <div
                    className={`relative w-full overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isControlsVisible
                            ? 'max-h-[52px] opacity-100'
                            : 'max-h-0 opacity-0 max-sm:max-h-[52px] max-sm:opacity-100'
                    }`}
                >
                <button
                    type="button"
                    className={`w-full bg-black p-3 text-center text-base text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:p-2.5 max-md:text-[15px] max-sm:p-2 max-sm:text-sm ${
                        quantity > 0
                            ? 'pointer-events-none -translate-x-[18px] opacity-0'
                            : 'translate-x-0 opacity-100'
                    }`}
                    style={quantity === 0 && isHovered ? {animation: 'drawDown .35s cubic-bezier(0.22,1,0.36,1) forwards'} : undefined}
                    onClick={handleCart}
                >
                    Add to Cart
                </button>

                <div
                    className={`absolute inset-0 flex w-full items-center justify-between bg-black p-3 text-base text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:p-2.5 max-sm:p-2 ${
                        quantity > 0
                            ? 'pointer-events-auto translate-x-0 opacity-100'
                            : 'pointer-events-none translate-x-[18px] opacity-0'
                    }`}
                >
                    <button
                        type="button"
                        className="cursor-pointer border-none bg-transparent p-0 text-2xl font-semibold leading-none text-inherit max-sm:text-xl"
                        onClick={() => {handleQty('minus')}}
                    >
                        -
                    </button>

                    <span className="min-w-6 text-center font-bold">
                        {quantity}
                    </span>

                    <button
                        type="button"
                        className="cursor-pointer border-none bg-transparent p-0 text-2xl font-semibold leading-none text-inherit max-sm:text-xl"
                        onClick={() => {handleQty('add')}}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="w-full">
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-sm font-semibold tracking-[2%] max-md:text-[15px] max-sm:text-sm">
                        {product.name}
                    </h3>

                    <p className="mt-1 text-base font-bold tracking-[2%] max-md:text-[16px] max-sm:text-[15px]">
                        ₦{product.price.toLocaleString()}
                    </p>
                </Link>
            </div>
        </div>
    )
}