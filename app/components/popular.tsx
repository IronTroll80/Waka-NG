'use client'

import ProductCard from './productCard'
import {useState} from 'react'
import type {Product} from '../lib/products'

interface Props {
    products: Product[]
}

export default function Popular({products}: Props){

    const [activeCategory, setActiveCategory] = useState('All')

    const itemNav = ['All', ...new Set(products.map((product) => product.categoryName))]

    const visibleProducts = activeCategory === 'All'
        ? products
        : products.filter((product) => product.categoryName === activeCategory)

    return (
        <div className="flex w-full items-center bg-[var(--light-accent)] px-10 py-24 max-lg:px-8 max-lg:py-20 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">

            <div className="mx-auto w-full max-w-[1300px]">

                <h4 className="text-[40px] font-semibold tracking-[0%] text-[var(--foreground)] max-lg:text-[34px] max-md:text-[28px] max-md:leading-9 max-[500px]:text-[23px] max-[500px]:leading-[30px]">
                    Shop Popular Picks
                </h4>

                <div
                    className="mt-6 flex flex-wrap gap-0 max-md:mt-5 max-md:flex-nowrap max-md:overflow-x-auto max-md:[scrollbar-width:none] max-[500px]:mt-4 [&::-webkit-scrollbar]:hidden"
                    role="tablist"
                    aria-label="Popular product categories"
                >
                    {itemNav.map((category) => (
                        <button
                            type="button"
                            key={category}
                            role="tab"
                            aria-selected={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className={`cursor-pointer whitespace-nowrap border-none border-b-2 border-transparent bg-transparent px-2 py-2 font-inherit text-[var(--text-accent)] transition-[color,border-color] duration-200 ease-in-out hover:text-[var(--foreground)] max-md:px-2.5 max-md:text-sm max-[500px]:px-2 max-[500px]:text-[13px] ${
                                activeCategory === category
                                    ? 'border-b-[var(--foreground)] font-semibold text-[var(--foreground)]'
                                    : ''
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid max-w-[1200px] grid-cols-4 gap-6 max-lg:mt-8 max-lg:grid-cols-3 max-lg:gap-5 max-md:mt-7 max-md:grid-cols-2 max-md:gap-4 max-[500px]:mt-6">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.slice(0,4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-[var(--text-accent)]">
                            No products in this category yet.
                        </p>
                    )}
                </div>

            </div>
        </div>
    )
}