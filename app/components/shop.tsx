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

const PAGE_SIZE = 8

export default function Shop({ category }: ShopProps) {
  const { searchTerm } = useSearch()

  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const [showMenu, setShowMenu] = useState(false)
  const [showList, setShowList] = useState(true)
  const [showOsList, setShowOsList] = useState(true)
  const [showProList, setShowProList] = useState(true)

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedOS, setSelectedOS] = useState<string | null>(null)
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(null)

  // Helper: get first word as brand
  const getBrandFromName = (name: string) => name.split(' ')[0]

  // Dynamic brand list based on products
  const availableBrands = useMemo(
    () => Array.from(new Set(products.map(p => getBrandFromName(p.name)))),
    [products]
  )

  const getProductImage = (slug: string) => {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${slug}.jpg`
    return url || '/images/fallback.png'
  }

  // Reset when category or filters change
  useEffect(() => {
    setPage(1)
    setProducts([])
    setHasMore(true)
  }, [category, selectedBrand, selectedOS, selectedProcessor, searchTerm])

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)

      const from = (page - 1) * PAGE_SIZE
      const to = from + PAGE_SIZE - 1

      let query = supabase
        .from('products')
        .select(`id, name, description, price, slug, category, categoryName`, { count: 'exact' })
        .range(from, to)

      // CATEGORY FILTER
      if (category) query = query.eq('categoryName', category)

      // DATABASE FILTERS
      if (selectedBrand) query = query.ilike('name', `${selectedBrand}%`) // first word matches brand
      if (selectedOS) query = query.eq('os', selectedOS)
      if (selectedProcessor) query = query.eq('processor', selectedProcessor)
      if (searchTerm) query = query.ilike('name', `%${searchTerm}%`)

      const { data, error, count } = await query

      if (error) {
        console.error(error)
      } else {
        if (page === 1) setProducts(data || [])
        else setProducts(prev => [...prev, ...(data || [])])

        if (count && to + 1 >= count) setHasMore(false)
      }

      setLoading(false)
    }

    fetchProducts()
  }, [page, category, selectedBrand, selectedOS, selectedProcessor, searchTerm])

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showMenu])

  // Dynamic banner title
  const bannerTitle = selectedBrand || category || 'All Products'

  return (
    <>
      <div className={styles.container}>
        {/* CATEGORY BANNER */}
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
          {/* DESKTOP FILTERS */}
          <div className={styles.desktopMenu}>
            <div className={styles.priceBox}>
              <h3>Price</h3>
              <div className={styles.minMax}>
                <div className={styles.inputBox}>
                  <span>₦</span>
                  <input type='text' />
                  <p>Min</p>
                </div>
                <div className={styles.inputBox}>
                  <span>₦</span>
                  <input type='text' />
                  <p>Max</p>
                </div>
              </div>
            </div>

            <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Brand</h3>
                <p onClick={() => setShowList(!showList)}><BsCaretDown /></p>
              </div>
              {showList &&
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
              }
            </div>

            
            {/* <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Operating System</h3>
                <p onClick={() => setShowOsList(!showOsList)}><BsCaretDown /></p>
              </div>
              {showOsList &&
                <div className={styles.brandBoxBody}>
                  {['Windows', 'MacOS', 'Linux'].map(os => (
                    <div key={os} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedOS === os}
                        onChange={() => setSelectedOS(selectedOS === os ? null : os)}
                      />
                      <p>{os}</p>
                    </div>
                  ))}
                </div>
              }
            </div> */}

            {/* <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Processor</h3>
                <p onClick={() => setShowProList(!showProList)}><BsCaretDown /></p>
              </div>
              {showProList &&
                <div className={styles.brandBoxBody}>
                  {['Core-i7', 'Core-i9', 'Core-i5'].map(cpu => (
                    <div key={cpu} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedProcessor === cpu}
                        onChange={() => setSelectedProcessor(selectedProcessor === cpu ? null : cpu)}
                      />
                      <p>{cpu}</p>
                    </div>
                  ))}
                </div>
              }
            </div> */}

            {/* <button className={styles.saveButton}>Save Changes</button> */}
          </div>

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
                !loading && <p className={styles.noProductsFound}>No products found</p>
              )}
            </div>

            {hasMore && (
              <button
                className={styles.loadMore}
                onClick={() => setPage(prev => prev + 1)}
                disabled={loading}
              >
                {loading ? <div className={styles.loadingSpinner}></div> : 'Load More'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {showMenu &&
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileMenu}>
            <div className={styles.close} onClick={() => setShowMenu(false)}>
              <button><FaX /></button>
            </div>

            <div className={styles.priceBox}>
              <h3>Price</h3>
              <div className={styles.minMax}>
                <div className={styles.inputBox}>
                  <span>₦</span>
                  <input type='text' />
                  <p>Min</p>
                </div>
                <div className={styles.inputBox}>
                  <span>₦</span>
                  <input type='text' />
                  <p>Max</p>
                </div>
              </div>
            </div>

            <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Brand</h3>
                <p onClick={() => setShowList(!showList)}><BsCaretDown /></p>
              </div>
              {showList &&
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
              }
            </div>

            {/* OS */}
            {/* <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Operating System</h3>
                <p onClick={() => setShowOsList(!showOsList)}><BsCaretDown /></p>
              </div>
              {showOsList &&
                <div className={styles.brandBoxBody}>
                  {['Windows', 'MacOS', 'Linux'].map(os => (
                    <div key={os} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedOS === os}
                        onChange={() => setSelectedOS(selectedOS === os ? null : os)}
                      />
                      <p>{os}</p>
                    </div>
                  ))}
                </div>
              }
            </div> */}

            {/* Processor */}
            {/* <div className={styles.brandBox}>
              <div className={styles.brandBoxTop}>
                <h3>Processor</h3>
                <p onClick={() => setShowProList(!showProList)}><BsCaretDown /></p>
              </div>
              {showProList &&
                <div className={styles.brandBoxBody}>
                  {['Core-i7', 'Core-i9', 'Core-i5'].map(cpu => (
                    <div key={cpu} className={styles.checkbox}>
                      <input
                        type="checkbox"
                        checked={selectedProcessor === cpu}
                        onChange={() => setSelectedProcessor(selectedProcessor === cpu ? null : cpu)}
                      />
                      <p>{cpu}</p>
                    </div>
                  ))}
                </div>
              }
            </div> */}

            {/* <button className={styles.saveButton}>Save Changes</button> */}
          </div>
        </div>
      }
    </>
  )
}