'use client'

import Link from 'next/link'
import { useState } from 'react'
import ProductCard from './productCard'
import type {Product} from '../lib/products'

interface Props {
    products: Product[]
}

const budgetLimit = 50000

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name'

export default function BudgetPicks({products}: Props){
    const [sortOption, setSortOption] = useState<SortOption>('featured')

    const budgetProducts = products
        .filter((product) => product.price <= budgetLimit)
        .sort((firstProduct, secondProduct) => {
            if (sortOption === 'price-low') {
                return firstProduct.price - secondProduct.price
            }

            if (sortOption === 'price-high') {
                return secondProduct.price - firstProduct.price
            }

            if (sortOption === 'name') {
                return firstProduct.name.localeCompare(secondProduct.name)
            }

            return 0
        })

    return (
        <section className="w-full px-10 py-24 max-lg:px-8 max-lg:py-20 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">
            <div className="mx-auto w-full max-w-[1300px]">
                <div className="flex items-end justify-between gap-6 max-md:items-start max-[500px]:flex-col max-[500px]:gap-4">
                    <div>
                        <h2 className="text-[40px] font-semibold text-[var(--foreground)] max-lg:text-[34px] max-md:text-[28px] max-md:leading-9 max-[500px]:text-[23px] max-[500px]:leading-[30px]">
                            Budget Picks
                        </h2>
                        <p className="mt-2 text-lg text-[var(--text-accent)] max-md:text-base max-[500px]:text-sm">
                            Top Items Under ₦50,000
                        </p>
                    </div>

                    <label className="flex items-center gap-3 text-sm font-semibold text-[var(--text-accent)] max-[500px]:w-full max-[500px]:justify-between">
                        <span>Sort by</span>
                        <select
                            value={sortOption}
                            onChange={(event) => setSortOption(event.target.value as SortOption)}
                            className="cursor-pointer border border-[var(--border-color)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] outline-none transition-colors hover:border-[var(--foreground)] max-[500px]:flex-1"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to high</option>
                            <option value="price-high">Price: High to low</option>
                            <option value="name">Name</option>
                        </select>
                    </label>
                </div>

                <div className="mt-12 grid grid-cols-4 gap-12 max-lg:mt-8 max-lg:grid-cols-3 max-lg:gap-5 max-md:mt-7 max-md:grid-cols-2 max-md:gap-4 max-[500px]:mt-6">
                    {budgetProducts.slice(0,4).map((product, index) => (
                        <ProductCard product={product} key={index}/>
                    ))}
                </div>

                <Link
                    href="/shop"
                    className="mt-10 inline-flex items-center font-semibold underline transition duration-300 hover:translate-x-2.5 max-md:mt-8 max-md:text-sm max-[500px]:mt-6 max-[500px]:text-[13px]"
                >
                    Explore Budget Picks
                </Link>
            </div>
        </section>
    )
}
