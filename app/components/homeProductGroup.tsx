


'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import styles from './homeProductGroup.module.css'
import HotProduct from './hotProduct'

type Product = {
  id: string
  name: string
  price: number
  category: string
  categoryName: string
  images: string[]
  slug: string
}

export default function HomeProductGroup() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchSimilar() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('categoryName', 'speakers')
        .limit(5)

      if (error) {
        console.error(error)
        return
      }

      setProducts(data || [])
    }

    fetchSimilar()
  })

  return (
    <div className={styles.container}>
        <div className= {styles.content}>
            {products.map((product) => (
                <HotProduct
                key={product.id}
                category={product.categoryName || 'Uncategorized'}
                title={product.name}
                price={product.price}
                hot={false}
                image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${product.slug}.jpg`}
                slug={product.slug}
                />
            ))}
        </div>
    </div>
  )
}
