

'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import styles from './productDetails.module.css'
import { BsCart } from 'react-icons/bs'
import TitleArea from './titleArea'
import HomeProductGroup from './homeProductGroup'
import SimilarProducts from './similarProducts'

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  slug: string
  images: string[] 
  specs: Record<string, string>
  sku?: string
  tags?: string[]
  notes?: string
  categoryName?: string
}

export default function ProductDetails() {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [mainImage, setMainImage] = useState<string>('')
  const fallbackImage = '/fallback.png';

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select(`*`)
        .eq('slug', slug)
        .single()

      if (error) {
        console.error(error)
        return
      }

      setProduct(data)
      if (data.images && data.images.length > 0) setMainImage(data.images[0])
    }

    fetchProduct()
  }, [slug])

  if (!product) return <div className={styles.spinner}></div>


  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBody}>
          <div className={styles.images}>
            <div className={styles.mainImage}>
              <Image
                src={
                  mainImage
                    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${mainImage}`
                    : fallbackImage
                }
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = fallbackImage;
                }}
              />
            </div>
            <div className={styles.imageGroup}>
              {product.images?.map((img, index) => (
                <div
                  key={index}
                  className={styles.subImage}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={
                      img
                        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${img}`
                        : fallbackImage
                    }
                    alt={`${product.name}-${index}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>


          <div className={styles.body}>
            <p className={styles.category}>{product.categoryName}</p>
            <p className={styles.title}>{product.name}</p>
            <p className={styles.price}>
              {new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
              }).format(product.price)}
            </p>
            <p className={styles.desc}>{product.description}</p>
            <br />
            <p className={styles.misc}>
              SKU: {product.sku || 'N/A'} <br />
              Category: {product.categoryName} <br />
              Tags: {product.tags?.join(', ') || 'N/A'}
            </p>

          <div className={styles.buttonGroup}>
            <a
              href={`https://wa.me/2348133896617?text=${encodeURIComponent(
                `Hi Waka NG, I would like to purchase the ${product.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toCart}
            >
              <BsCart /> Purchase
              <div className={styles.whatsapp}>
                <Image src={'/whatsapp.svg'} alt='Whatsapp' fill />
              </div>
            </a>
          </div>


            <hr className={styles.divider} />

                      <div className= {styles.specifications}>
                          <Image  src = {'/check.svg'} alt = 'hp' width = {30} height = {30} title='In Good Condition'/>
                          <Image  src = {'/shield.svg'} alt = 'i7' width = {30} height = {30} title='Trusted Sellers'/>
                    </div>
                </div>
            </div>
            <div className= {styles.bottomBody}>
                    <p className= {styles.fullSpecs}>Full Specifications</p>
            <div className={styles.fullSpecsGroup}>
            {product.specs &&
                Object.entries(product.specs).map(([key, value], idx) => (
                <div key={idx} className={styles.item}>
                    <div>
                    <Image
                        src={`/${key}.svg`}
                        alt={key}
                        width={20}
                        height={20}
                        onError={(e) => {
                        (e.target as HTMLImageElement).src = '/defaultSpec.svg';
                        }}
                    />
                    <p>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
                    </div>
                    <p className={styles.specName}>{value}</p>
                </div>
                ))}
            </div>

                    <p className= {styles.fullSpecs}>Other Notes</p><br/>
                    <p className= {styles.notes}>
                        {product.notes}
                    </p>
            </div>
        </div>

        
        <TitleArea title='Similar Products' subtitle='Check out similar products'/>
        
        <SimilarProducts 
          category={product.category}
          currentProductId={product.id}
        />

    </>
  )
}
