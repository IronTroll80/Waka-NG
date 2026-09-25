'use client'

import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { categories } from '../data/categories'


export default function Categories(){

    const categoryRowRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)

    const updateScrollState = () => {
        const row = categoryRowRef.current

        if (!row) {
            return
        }

        setCanScrollLeft(row.scrollLeft > 0)
        setCanScrollRight(row.scrollLeft + row.clientWidth < row.scrollWidth - 1)
    }

    useEffect(() => {
        updateScrollState()

        const row = categoryRowRef.current

        row?.addEventListener('scroll', updateScrollState)
        window.addEventListener('resize', updateScrollState)

        return () => {
            row?.removeEventListener('scroll', updateScrollState)
            window.removeEventListener('resize', updateScrollState)
        }
    }, [])

    useEffect(() => {
        if (isAutoScrollPaused) {
            return
        }

        const autoScroll = window.setInterval(() => {
            const row = categoryRowRef.current

            if (!row || row.scrollWidth <= row.clientWidth) {
                return
            }

            const isAtEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1

            row.scrollTo({
                left: isAtEnd ? 0 : row.scrollLeft + row.clientWidth,
                behavior: 'smooth'
            })
        }, 4500)

        return () => window.clearInterval(autoScroll)
    }, [isAutoScrollPaused])

    const scrollCategories = (direction: 'left' | 'right') => {
        categoryRowRef.current?.scrollBy({
            left: direction === 'right'
                ? categoryRowRef.current.clientWidth
                : -categoryRowRef.current.clientWidth,
            behavior: 'smooth'
        })
    }

    return (
        <div className="w-full px-10 py-24 max-lg:px-8 max-lg:py-20 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12 max-w-[1400px] m-auto">

            <div className="flex items-center justify-between gap-6 max-md:items-start max-[500px]:gap-3">

                <h4 className="text-[40px] font-semibold max-lg:text-[34px] max-md:text-[28px] max-md:leading-9 max-[500px]:text-[23px] max-[500px]:leading-[30px]">
                    What are you looking for?
                </h4>

                <div className="flex gap-2 max-[500px]:gap-1.5">

                    <button
                        type="button"
                        aria-label="Previous categories"
                        disabled={!canScrollLeft}
                        onClick={() => scrollCategories('left')}
                        className="cursor-pointer border border-[var(--border-color)] bg-transparent px-2 py-4 text-[var(--text-accent)] transition duration-400 hover:bg-[var(--light-accent)] active:scale-110 disabled:cursor-not-allowed disabled:opacity-35 max-md:px-[7px] max-md:py-3 max-[500px]:px-1.5 max-[500px]:py-2.5 [&_svg]:max-[500px]:h-[18px] [&_svg]:max-[500px]:w-[18px]"
                    >
                        <NavArrowLeft />
                    </button>

                    <button
                        type="button"
                        aria-label="Next categories"
                        disabled={!canScrollRight}
                        onClick={() => scrollCategories('right')}
                        className="cursor-pointer border border-[var(--border-color)] bg-transparent px-2 py-4 text-[var(--text-accent)] transition duration-400 hover:bg-[var(--light-accent)] active:scale-110 disabled:cursor-not-allowed disabled:opacity-35 max-md:px-[7px] max-md:py-3 max-[500px]:px-1.5 max-[500px]:py-2.5 [&_svg]:max-[500px]:h-[18px] [&_svg]:max-[500px]:w-[18px]"
                    >
                        <NavArrowRight />
                    </button>

                </div>
            </div>

            <div
                ref={categoryRowRef}
                onMouseEnter={() => setIsAutoScrollPaused(true)}
                onMouseLeave={() => setIsAutoScrollPaused(false)}
                onFocus={() => setIsAutoScrollPaused(true)}
                onBlur={() => setIsAutoScrollPaused(false)}
                className="mt-8 mb-8 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden [scrollbar-width:none] max-md:mt-6 max-md:mb-6 max-[500px]:mt-5 max-[500px]:mb-5 [&::-webkit-scrollbar]:hidden"
            >
                {categories.map((item) => (
                    <Link href={`/shop?category=${item.title.toLowerCase()}`} 
                        className="flex aspect-square w-[70%] max-w-[400px] shrink-0 cursor-pointer flex-col items-center justify-center bg-[var(--light-accent)] p-6 transition duration-400 hover:scale-[1.05] hover:opacity-90 max-lg:w-[45%] max-lg:max-w-[360px] max-md:w-[60%] max-md:max-w-[320px] max-md:p-5 max-[500px]:w-[78%] max-[500px]:max-w-[300px] max-[500px]:p-[18px]"
                        key={item.title}
                    >
                            <div className="relative aspect-[35/29] w-[90%] max-[500px]:w-[88%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                />
                            </div>

                            <h4 className="mt-4 text-base font-semibold text-[var(--foreground)] max-md:mt-3 max-md:text-[15px] max-[500px]:text-sm">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-xs font-normal text-[var(--text-accent)] max-md:mt-1.5 max-md:text-[11px]">
                                {item.subtitle}
                            </p>
                        </Link>
                ))}
            </div>

            <Link
                href="/categories"
                className="mt-8 flex w-fit items-center gap-1 font-semibold underline transition duration-400 hover:translate-x-2.5 max-md:mt-6 max-md:text-sm max-[500px]:mt-5 max-[500px]:text-[13px] [&_svg]:max-[500px]:h-[18px] [&_svg]:max-[500px]:w-[18px]"
            >
                Explore More Categories
                <NavArrowRight />
            </Link>

        </div>
    )
}