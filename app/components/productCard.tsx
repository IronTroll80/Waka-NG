'use client'

import Image from 'next/image'
import styles from './productCard.module.css'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
    image: string
    title: string
    price: number
    category: string
    slug: string
}

export default function ProductCard({ image, title, price, category, slug }: Props) {
    const fallbackImage = '/fallback.png'
    const [imgSrc, setImgSrc] = useState(image)

    return (
        <div className={styles.container}>
            <Link href={`/product/${slug}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        onError={() => setImgSrc(fallbackImage)}
                    />
                </div>

                <div className={styles.body}>
                    <p className={styles.category}>{category}</p>
                    <div>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>₦ {price.toLocaleString()}</p>
                    </div>
                </div>

                <button className={styles.button}>See Details</button>
            </Link>
        </div>
    )
}
