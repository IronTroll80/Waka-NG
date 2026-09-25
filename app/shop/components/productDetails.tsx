'use client'

import Header from '@/app/components/header'
import styles from '../[slug]/styler.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {use, useState} from 'react'
import {CheckCircleSolid, NavArrowRight} from 'iconoir-react'
import ProductCard from '@/app/components/productCard'
import Footer from '@/app/components/footer'
import {useCart} from '@/app/context/CartContext'
import type {Product} from '@/app/lib/products'
import {getProductImage} from '@/app/lib/products'

interface Props {
    params: Promise<{
        slug: string
    }>
    products: Product[]
}

export default function ProductDetails({params, products}: Props) {

    const {slug} = use(params)

    const product = products.find((item) => item.slug === slug)

    const {cart, addToCart, removeFromCart, updateQty} = useCart()

    const [showInstructions, setShowInstructions] = useState(false)

    const cartProduct = cart.find((item) => item.id === product?.id)

    const qty = cartProduct?.qty || 0
    const isInCart = qty > 0

    const handleQty = (operation: 'minus' | 'add') => {
        if (!product) return

        if (!isInCart) {
            setShowInstructions(true)
            return
        }

        updateQty(product, operation)
    }

    const handleCart = () => {
        if (!product) return

        if (isInCart) {
            removeFromCart(product)
        } else {
            addToCart(product)
            setShowInstructions(false)
        }
    }

    const similarItems = products.filter((item) =>
        item.category === product?.category && item.id !== product?.id
    )

    return (
        <>
            <Header products={products} />

            <div className={styles.container}>
                <p className={styles.breadcrumbs}>
                    <span>
                        <Link href="/">Home /</Link>
                    </span>

                    <span>
                        <Link href={`/shop?category=${product?.categoryName}`}>
                            {product?.categoryName} /
                        </Link>
                    </span>

                    <span className={styles.productnameslug}>
                        <Link href={`/shop/${product?.slug}`}>
                            {product?.name}
                        </Link>
                    </span>
                </p>

                <div className={styles.productArea}>
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={product ? getProductImage(product.slug) : '/images/fallback.png'}
                                alt={product?.name || 'Product'}
                                fill
                            />
                        </div>
                    </div>

                    <div className={styles.textArea}>
                        <span className={styles.status}>
                            In Stock
                        </span>

                        <h4>{product?.name}</h4>

                        <p className={styles.category}>
                            Category:

                            <Link href={`/shop?category=${product?.categoryName}`}>
                                {product?.categoryName}
                            </Link>
                        </p>

                        <h2>
                            ₦{product?.price.toLocaleString()}
                        </h2>

                        <div className={styles.qty}>
                            <span onClick={() => handleQty('minus')}>
                                -
                            </span>

                            <span>
                                {qty}
                            </span>

                            <span onClick={() => handleQty('add')}>
                                +
                            </span>
                        </div>

                        {showInstructions && (
                            <p className={styles.instructions}>
                                Add item first
                            </p>
                        )}

                        <div className={styles.desc}>
                            <h5>Description</h5>

                            <p>
                                {product?.description}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleCart}
                            className={isInCart ? styles.cartButton : styles.noCartButton}
                        >
                            {isInCart ? (
                                <span>
                                    Added To Cart
                                    <CheckCircleSolid />
                                </span>
                            ) : (
                                'Add To Cart'
                            )}
                        </button>
                    </div>
                </div>

                <div className={styles.similar}>
                    <h4>Explore Similar products</h4>

                    <div className={styles.similarItems}>
                        {similarItems.slice(0,4).map((item) => (
                            <ProductCard
                                product={item}
                                key={item.id}
                            />
                        ))}
                    </div>

                    <Link
                        href="/shop"
                        className="mt-0 flex w-fit items-center gap-1 font-semibold underline transition duration-400 hover:translate-x-2.5 max-md:mt-6 max-sm:mt-5 max-sm:text-[13px] [&_svg]:max-sm:h-[18px] [&_svg]:max-sm:w-[18px]"
                    >
                        Explore More
                        <NavArrowRight />
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}