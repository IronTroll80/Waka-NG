
import Link from 'next/link'
import ProductCard from './productCard'
import styles from './header.module.css'
import { Product } from '../lib/products'



interface DropDownContentProps {
    categories: string[]
    fastSelling: string[]
    products: Product[]
}

export default function DropDownContent({ categories, fastSelling, products }: DropDownContentProps) {
    return (
        <div className={styles.dropdownContent}>
            <div className={styles.dropdownColumn}>
                <h4>Category</h4>
                <ul>
                    {categories.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                    <button type='button'><Link href = '/shop'> Shop All </Link></button>
                </ul>
            </div>

            <div className={styles.dropdownColumn}>
                <h4>Fast Selling</h4>
                <ul>
                    {fastSelling.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.productGrid}>
                {products.slice(0,4).map((product, index) => (
                    <ProductCard product={product}  key={index}/>
                ))}
            </div>
        </div>
    )
}
