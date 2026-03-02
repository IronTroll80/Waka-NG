'use client'

import styles from './shop.module.css'
import Image from 'next/image'
import ProductCard from './productCard'
import { BsCaretDown } from 'react-icons/bs'
import { FaX } from 'react-icons/fa6'
import { useEffect, useState, useMemo } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useSearch } from '../context/searchContext'

type Product = {
  id: string
  name: string
  description: string
  price: number
  slug: string
  os?: string
  processor?: string
  category: string
  categoryName?: string
}

interface ShopProps {
  category?: string
}

const PAGE_SIZE = 24

export default function Shop({ category }: ShopProps) {
  const { searchTerm } = useSearch()

  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const [showMenu, setShowMenu] = useState(false)
  const [showList, setShowList] = useState(true)

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const [priceCap, setPriceCap] = useState<number>(0)
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)

  const getBrandFromName = (name: string) => name.split(' ')[0]

  const availableBrands = useMemo(
    () => Array.from(new Set(products.map(p => getBrandFromName(p.name)))),
    [products]
  )

  const getProductImage = (slug: string) => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return '/images/fallback.png'
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${slug}.jpg`
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPage(1)
    setProducts([])
    setHasMore(true)
  }, [category, selectedBrand, searchTerm, minPrice, maxPrice])

  // Fetch highest price dynamically based on filters (except price)
  useEffect(() => {
    async function fetchHighestPrice() {
      let query = supabase
        .from('products')
        .select('price')
        .order('price', { ascending: false })
        .limit(1)

      if (category) query = query.eq('categoryName', category)
      if (selectedBrand) query = query.ilike('name', `${selectedBrand}%`)
      if (searchTerm) query = query.ilike('name', `%${searchTerm}%`)

      const { data, error } = await query

      if (!error && data && data.length > 0) {
        const highest = data[0].price
        setPriceCap(highest)
        setMaxPrice(highest)
      } else {
        setPriceCap(0)
        setMaxPrice(0)
      }
    }

    fetchHighestPrice()
  }, [category, selectedBrand, searchTerm])

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)

      const from = (page - 1) * PAGE_SIZE
      const to = from + PAGE_SIZE - 1

      let query = supabase
        .from('products')
        .select(`id, name, description, price, slug, category, categoryName`, { count: 'exact' })
        .range(from, to)

      if (category) query = query.eq('categoryName', category)
      if (selectedBrand) query = query.ilike('name', `${selectedBrand}%`)
      if (searchTerm) query = query.ilike('name', `%${searchTerm}%`)
      if (minPrice !== null) query = query.gte('price', minPrice)
      if (maxPrice !== null) query = query.lte('price', maxPrice)

      const { data, error, count } = await query

      if (error) {
        console.error(error)
      } else {
        if (page === 1) setProducts(data || [])
        else setProducts(prev => [...prev, ...(data || [])])

        if (count !== null && to + 1 >= count) setHasMore(false)
      }

      setLoading(false)
    }

    if (maxPrice !== null) fetchProducts()
  }, [page, category, selectedBrand, minPrice, maxPrice, searchTerm])

  // Prevent body scroll when mobile filter open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showMenu])

  // Prevent min > max
  useEffect(() => {
    if (maxPrice !== null && minPrice > maxPrice) {
      setMaxPrice(minPrice)
    }
  }, [minPrice])

  const bannerTitle = selectedBrand || category || 'All Products'

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h2>{bannerTitle}</h2>
          <p>{products.length} product{products.length !== 1 ? 's' : ''} found</p>
        </div>

        <div className={styles.topnav}>
          <div onClick={() => setShowMenu(true)}>
            <Image src="/filter.svg" alt="filter" width={30} height={30} />
          </div>
        </div>

        <div className={styles.alignContainer}>
          {/* Desktop Filter */}
          <div className={styles.desktopMenu}>
            <div className={styles.priceBox}>
              <h3>Price</h3>
              <div className={styles.sliderBox}>
                <input
                  type="range"
                  min="0"
                  max={priceCap}
                  step="10000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  type="range"
                  min="0"
                  max={priceCap}
                  step="10000"
                  value={maxPrice ?? priceCap}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className={styles.priceDisplay}>
                  <p>₦{minPrice.toLocaleString()}</p>
                  <p>₦{(maxPrice ?? priceCap).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Brand</h3>
                <p onClick={() => setShowList(!showList)}><BsCaretDown /></p>
              </div>

              {showList && (
                <div className={styles.brandBoxBody}>
                  {availableBrands.map(brand => (
                    <div key={brand} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedBrand === brand}
                        onChange={() =>
                          setSelectedBrand(selectedBrand === brand ? null : brand)
                        }
                      />
                      <p>{brand}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products */}
          <div className={styles.productPageContainer}>
            <div className={styles.productContainer}>
              {products.length > 0 ? (
                products.map(product => (
                  <ProductCard
                    key={product.id}
                    image={getProductImage(product.slug)}
                    title={product.name}
                    price={product.price}
                    category={product.categoryName ?? 'Uncategorized'}
                    slug={product.slug}
                  />
                ))
              ) : (
                !loading && (
                  <p className={styles.noProductsFound}>
                    No products found
                  </p>
                )
              )}
            </div>

            {hasMore && (
              <button
                className={styles.loadMore}
                onClick={() => setPage(prev => prev + 1)}
                disabled={loading}
              >
                {loading ? (
                  <div className={styles.loadingSpinner}></div>
                ) : (
                  'Load More'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter */}
      {showMenu && (
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenu}>
            <div className={styles.close} onClick={() => setShowMenu(false)}>
              <button><FaX /></button>
            </div>

            <div className={styles.priceBox}>
              <h3>Price</h3>
              <div className={styles.sliderBox}>
                <input
                  type="range"
                  min="0"
                  max={priceCap}
                  step="10000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  type="range"
                  min="0"
                  max={priceCap}
                  step="10000"
                  value={maxPrice ?? priceCap}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className={styles.priceDisplay}>
                  <p>₦{minPrice.toLocaleString()}</p>
                  <p>₦{(maxPrice ?? priceCap).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Brand</h3>
                <p onClick={() => setShowList(!showList)}><BsCaretDown /></p>
              </div>

              {showList && (
                <div className={styles.brandBoxBody}>
                  {availableBrands.map(brand => (
                    <div key={brand} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedBrand === brand}
                        onChange={() =>
                          setSelectedBrand(selectedBrand === brand ? null : brand)
                        }
                      />
                      <p>{brand}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}