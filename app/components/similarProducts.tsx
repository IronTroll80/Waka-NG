
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import styles from './similarProducts.module.css'
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

export default function SimilarProducts({ 
  category, 
  currentProductId 
}: { 
  category: string
  currentProductId: string
}) {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchSimilar() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .neq('id', currentProductId) // exclude current product
        .limit(5)

      if (error) {
        console.error(error)
        return
      }

      setProducts(data || [])
    }

    fetchSimilar()
  }, [category, currentProductId])

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <HotProduct
          key={product.id}
          category={product.categoryName || 'Uncategorized'}
          title={product.name}
          price={product.price}
          hot={false}
          image={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${product.images?.[0]}`}
          slug={product.slug}
        />
      ))}
    </div>
  )
}
