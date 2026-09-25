'use client'

import {useEffect, useMemo, useState} from 'react'
import ProductCard from '../../components/productCard'
import {InputSearch} from 'iconoir-react'
import {categories} from '@/app/data/categories'
import {useSearchParams} from 'next/navigation'
import type {Product} from '@/app/lib/products'

interface Props {
    products: Product[]
}

const MIN_PRICE = 0
const MAX_PRICE = 500000
const PRODUCTS_PER_PAGE = 12

export default function Shop({products}: Props) {
    const searchParams = useSearchParams()

    const urlCategory = searchParams.get('category')
    const search = searchParams.get('search') || ''

    const [category, setCategory] = useState(urlCategory || 'All')
    const [sort, setSort] = useState('')
    const [minPrice, setMinPrice] = useState(MIN_PRICE)
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE)
    const [currentPage, setCurrentPage] = useState(1)
    const [showFilters, setShowFilters] = useState(false)
    const [showSort, setShowSort] = useState(false)

    useEffect(() => {
        setCategory(urlCategory || 'All')
    }, [urlCategory])

    useEffect(() => {
        setCurrentPage(1)
    }, [category, search, sort, minPrice, maxPrice])

    const filteredProducts = useMemo(() => {
        const byCategory =
            category === 'All'
                ? products
                : products.filter(
                    (product) =>
                        product.categoryName.toLowerCase() === category.toLowerCase()
                )

        const bySearch = byCategory.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )

        const byPrice = bySearch.filter((product) => {
            const price = Number(product.price)

            return price >= minPrice && price <= maxPrice
        })

        if (sort === 'name') {
            return [...byPrice].sort((a, b) =>
                a.name.localeCompare(b.name)
            )
        }

        if (sort === 'low') {
            return [...byPrice].sort((a, b) => a.price - b.price)
        }

        if (sort === 'high') {
            return [...byPrice].sort((a, b) => b.price - a.price)
        }

        return byPrice
    }, [products, category, search, sort, minPrice, maxPrice])

    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    )

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE

    const visibleProducts = filteredProducts.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    )

    const handleMinPriceChange = (value: string) => {
        const parsedValue = Number(value)

        if (Number.isNaN(parsedValue)) {
            return
        }

        setMinPrice(
            Math.min(
                Math.max(parsedValue, MIN_PRICE),
                maxPrice
            )
        )
    }

    const handleMaxPriceChange = (value: string) => {
        const parsedValue = Number(value)

        if (Number.isNaN(parsedValue)) {
            return
        }

        setMaxPrice(
            Math.max(
                Math.min(parsedValue, MAX_PRICE),
                minPrice
            )
        )
    }

    const resetFilters = () => {
        setCategory('All')
        setSort('')
        setMinPrice(MIN_PRICE)
        setMaxPrice(MAX_PRICE)
        setCurrentPage(1)
    }

    return (
        <div className='mx-auto w-full max-w-[1200px] px-4 py-[96px] max-md:px-5 max-md:py-[64px] max-sm:px-4 max-sm:py-[48px]'>

            <div className='mb-[48px] px-4 max-md:mb-[36px] max-md:px-0 max-sm:mb-[28px]'>
                <h1 className='text-[48px] font-[700] capitalize max-md:text-[38px] max-md:leading-[46px] max-sm:text-[28px] max-sm:leading-[36px]'>
                    {search
                        ? `Search results for "${search}"`
                        : category === 'All'
                            ? 'All Products'
                            : category}
                </h1>

                <p className='text-[14px] font-[500] text-[var(--text-accent)] max-sm:text-[13px]'>
                    {search
                        ? `Showing products matching "${search}".`
                        : category === 'All'
                            ? 'Explore everything Waka has to offer.'
                            : `Explore our ${category.toLowerCase()} products.`}
                </p>
            </div>

            <main className='flex w-full gap-4 bg-[var(--background)] max-md:block'>

                <aside className='w-[210px] shrink-0 px-4 py-0 max-md:hidden'>
                    <h3 className='text-base font-semibold text-[var(--foreground)]'>
                        Filters
                    </h3>

                    <div className='mt-3 border-t border-[var(--border-color)] pt-5'>
                        <h4 className='text-sm font-semibold text-[var(--foreground)]'>
                            Sort
                        </h4>

                        <div className='mt-4 flex flex-col gap-4'>
                            <label className='flex cursor-pointer items-center gap-3 text-sm text-[var(--text-accent)]'>
                                <input
                                    type='radio'
                                    name='sort'
                                    checked={sort === 'name'}
                                    onChange={() => setSort('name')}
                                    className='h-4 w-4 accent-[var(--foreground)]'
                                />
                                Name: A - Z
                            </label>

                            <label className='flex cursor-pointer items-center gap-3 text-sm text-[var(--text-accent)]'>
                                <input
                                    type='radio'
                                    name='sort'
                                    checked={sort === 'low'}
                                    onChange={() => setSort('low')}
                                    className='h-4 w-4 accent-[var(--foreground)]'
                                />
                                Price: Low to High
                            </label>

                            <label className='flex cursor-pointer items-center gap-3 text-sm text-[var(--text-accent)]'>
                                <input
                                    type='radio'
                                    name='sort'
                                    checked={sort === 'high'}
                                    onChange={() => setSort('high')}
                                    className='h-4 w-4 accent-[var(--foreground)]'
                                />
                                Price: High to Low
                            </label>
                        </div>
                    </div>

                    <div className='mt-7 border-t border-[var(--border-color)] pt-5'>
                        <h4 className='text-sm font-semibold text-[var(--foreground)]'>
                            Category
                        </h4>

                        <div className='mt-4 flex flex-col gap-4'>
                            {categories.slice(0, 5).map((item) => (
                                <label
                                    key={item.title}
                                    className='flex cursor-pointer items-center gap-3 text-sm text-[var(--text-accent)]'
                                >
                                    <input
                                        type='radio'
                                        name='category'
                                        checked={category === item.title}
                                        onChange={() => setCategory(item.title)}
                                        className='h-4 w-4 accent-[var(--foreground)]'
                                    />
                                    {item.title}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='mt-7 border-t border-[var(--border-color)] pt-5'>
                        <h4 className='text-sm font-semibold text-[var(--foreground)]'>
                            Price
                        </h4>

                        <div className='mt-5 space-y-4'>
                            <div className='space-y-2'>
                                <label className='block text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-accent)]'>
                                    Min
                                </label>

                                <input
                                    type='number'
                                    min={MIN_PRICE}
                                    max={MAX_PRICE}
                                    value={minPrice}
                                    onChange={(event) =>
                                        handleMinPriceChange(event.target.value)
                                    }
                                    className='w-full border border-[var(--border-color)] bg-transparent px-2 py-2 text-sm text-[var(--foreground)] outline-none'
                                />
                            </div>

                            <div className='space-y-2'>
                                <label className='block text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-accent)]'>
                                    Max
                                </label>

                                <input
                                    type='number'
                                    min={MIN_PRICE}
                                    max={MAX_PRICE}
                                    value={maxPrice}
                                    onChange={(event) =>
                                        handleMaxPriceChange(event.target.value)
                                    }
                                    className='w-full border border-[var(--border-color)] bg-transparent px-2 py-2 text-sm text-[var(--foreground)] outline-none'
                                />
                            </div>

                            <div className='space-y-2 pt-1'>
                                <input
                                    type='range'
                                    min={MIN_PRICE}
                                    max={MAX_PRICE}
                                    value={maxPrice}
                                    onChange={(event) =>
                                        handleMaxPriceChange(event.target.value)
                                    }
                                    className='w-full accent-[var(--foreground)]'
                                />
                            </div>
                        </div>

                        <div className='mt-4 flex items-center justify-between gap-2'>
                            <div className='flex-1 border border-[var(--border-color)] px-2 py-2 text-center text-xs text-[var(--text-accent)]'>
                                ₦{minPrice.toLocaleString()}
                            </div>

                            <span className='text-xs text-[var(--text-accent)]'>
                                to
                            </span>

                            <div className='flex-1 border border-[var(--border-color)] px-2 py-2 text-center text-xs text-[var(--text-accent)]'>
                                ₦{maxPrice.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </aside>

                <section className='min-w-0 flex-1'>

                    <div className='mb-6 hidden items-center justify-between max-md:flex'>
                        <button
                            type='button'
                            onClick={() => {
                                setShowFilters(!showFilters)
                                setShowSort(false)
                            }}
                            className='text-sm font-semibold text-[var(--foreground)]'
                        >
                            Filters
                        </button>

                        <button
                            type='button'
                            onClick={() => {
                                setShowSort(!showSort)
                                setShowFilters(false)
                            }}
                            className='text-sm font-semibold text-[var(--foreground)]'
                        >
                            Sort
                        </button>
                    </div>

                    {showFilters && (
                        <div className='mb-6 border border-[var(--border-color)] p-4 md:hidden'>
                            <h4 className='text-sm font-semibold text-[var(--foreground)]'>
                                Category
                            </h4>

                            <div className='mt-4 flex flex-wrap gap-3'>
                                <button
                                    type='button'
                                    onClick={() => setCategory('All')}
                                    className={`border px-3 py-2 text-sm ${
                                        category === 'All'
                                            ? 'border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]'
                                            : 'border-[var(--border-color)] text-[var(--foreground)]'
                                    }`}
                                >
                                    All
                                </button>

                                {categories.slice(0, 5).map((item) => (
                                    <button
                                        key={item.title}
                                        type='button'
                                        onClick={() => setCategory(item.title)}
                                        className={`border px-3 py-2 text-sm ${
                                            category === item.title
                                                ? 'border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]'
                                                : 'border-[var(--border-color)] text-[var(--foreground)]'
                                        }`}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                            <div className='mt-6'>
                                <h4 className='text-sm font-semibold text-[var(--foreground)]'>
                                    Price
                                </h4>

                                <div className='mt-4 grid grid-cols-2 gap-3'>
                                    <div>
                                        <label className='mb-2 block text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-accent)]'>
                                            Min
                                        </label>

                                        <input
                                            type='number'
                                            min={MIN_PRICE}
                                            max={MAX_PRICE}
                                            value={minPrice}
                                            onChange={(event) =>
                                                handleMinPriceChange(event.target.value)
                                            }
                                            className='w-full border border-[var(--border-color)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] outline-none'
                                        />
                                    </div>

                                    <div>
                                        <label className='mb-2 block text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-accent)]'>
                                            Max
                                        </label>

                                        <input
                                            type='number'
                                            min={MIN_PRICE}
                                            max={MAX_PRICE}
                                            value={maxPrice}
                                            onChange={(event) =>
                                                handleMaxPriceChange(event.target.value)
                                            }
                                            className='w-full border border-[var(--border-color)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] outline-none'
                                        />
                                    </div>
                                </div>

                                <input
                                    type='range'
                                    min={MIN_PRICE}
                                    max={MAX_PRICE}
                                    value={maxPrice}
                                    onChange={(event) =>
                                        handleMaxPriceChange(event.target.value)
                                    }
                                    className='mt-5 w-full accent-[var(--foreground)]'
                                />
                            </div>

                            <button
                                type='button'
                                onClick={resetFilters}
                                className='mt-5 border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--foreground)]'
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {showSort && (
                        <div className='mb-6 flex flex-col gap-3 border border-[var(--border-color)] p-4 md:hidden'>
                            <button
                                type='button'
                                onClick={() => setSort('name')}
                                className={`text-left text-sm ${
                                    sort === 'name'
                                        ? 'font-semibold text-[var(--foreground)]'
                                        : 'text-[var(--text-accent)]'
                                }`}
                            >
                                Name: A - Z
                            </button>

                            <button
                                type='button'
                                onClick={() => setSort('low')}
                                className={`text-left text-sm ${
                                    sort === 'low'
                                        ? 'font-semibold text-[var(--foreground)]'
                                        : 'text-[var(--text-accent)]'
                                }`}
                            >
                                Price: Low to High
                            </button>

                            <button
                                type='button'
                                onClick={() => setSort('high')}
                                className={`text-left text-sm ${
                                    sort === 'high'
                                        ? 'font-semibold text-[var(--foreground)]'
                                        : 'text-[var(--text-accent)]'
                                }`}
                            >
                                Price: High to Low
                            </button>

                            <button
                                type='button'
                                onClick={() => setSort('')}
                                className='mt-2 text-left text-sm text-[var(--text-accent)]'
                            >
                                Clear sort
                            </button>
                        </div>
                    )}

                    <div className='min-h-[320px] w-full'>
                        {visibleProducts.length > 0 ? (
                            <>
                                <div className='grid min-h-[300px] grid-cols-3 gap-x-2 gap-y-8 max-lg:grid-cols-2 max-md:gap-x-3 max-md:gap-y-8 max-sm:grid-cols-2 max-sm:gap-x-2 max-sm:gap-y-6'>
                                    {visibleProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <div className='mt-12 flex items-center justify-center gap-2 max-sm:mt-8'>
                                        <button
                                            type='button'
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage((page) => page - 1)}
                                            className='border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--light-accent)] disabled:cursor-not-allowed disabled:opacity-30 max-sm:px-3 max-sm:text-xs'
                                        >
                                            Previous
                                        </button>

                                        {Array.from(
                                            {length: Math.min(totalPages, 5)},
                                            (_, index) => {
                                                let page = index + 1

                                                if (totalPages > 5 && currentPage >= 4) {
                                                    page = currentPage - 2 + index
                                                }

                                                if (page > totalPages) {
                                                    page = totalPages - 4 + index
                                                }

                                                return page
                                            }
                                        ).map((page) => (
                                            <button
                                                type='button'
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`min-w-10 border px-3 py-2 text-sm transition max-sm:min-w-8 max-sm:px-2 max-sm:text-xs ${
                                                    currentPage === page
                                                        ? 'border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]'
                                                        : 'border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--light-accent)]'
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            type='button'
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage((page) => page + 1)}
                                            className='border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--light-accent)] disabled:cursor-not-allowed disabled:opacity-30 max-sm:px-3 max-sm:text-xs'
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className='flex min-h-[320px] w-full items-center justify-center border border-[var(--border-color)] bg-[var(--background)]/70 p-8 text-center max-sm:min-h-[280px] max-sm:p-5'>
                                <div className='max-w-md'>
                                    <div className='mb-4 flex justify-center text-5xl text-[var(--text-accent)] max-sm:text-4xl'>
                                        <InputSearch/>
                                    </div>

                                    <h3 className='text-xl font-semibold text-[var(--foreground)] max-sm:text-lg'>
                                        No products found
                                    </h3>

                                    <p className='mt-2 text-sm text-[var(--text-accent)] max-sm:text-[13px]'>
                                        Try changing the category, sorting, or price range to discover more options.
                                    </p>

                                    <button
                                        type='button'
                                        onClick={resetFilters}
                                        className='mt-5 cursor-pointer border border-[var(--border-color)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-[var(--background)]'
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}