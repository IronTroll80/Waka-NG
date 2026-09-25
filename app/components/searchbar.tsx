'use client'

import { Search } from 'iconoir-react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './header.module.css'
import { products } from '../data/dropdown'
import type { Product } from '../lib/products'

interface SearchBarProps {
    onClose: () => void
    products: Product[]
}

export default function SearchBar({onClose, products}: SearchBarProps){

    const [search, setSearch] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [onClose])

    const suggestions = products
        .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 5)

    const handleSearch = () => {
        if (!search.trim()) {
            return
        }

        router.push(`/shop?search=${encodeURIComponent(search.trim())}`)
        onClose()
    }

    const handleSuggestion = (slug: string) => {
        router.push(`/shop/${slug}`)
        onClose()
    }

    return (
        <div ref={searchRef} className={styles.search}>
            <div className={styles.searchbox}>
                <input
                    type='search'
                    placeholder='Search'
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)
                        setShowSuggestions(event.target.value.trim().length > 0)
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                />

                <Search
                    color='#6a6a6a'
                    onClick={handleSearch}
                />
            </div>

            {showSuggestions && (
                <div className={styles.suggestions}>
                    {suggestions.length > 0 ? (
                        suggestions.map((product) => (
                            <p
                                key={product.id}
                                onClick={() => handleSuggestion(product.slug)}
                            >
                                {product.name}
                            </p>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            )}
        </div>
    )
}