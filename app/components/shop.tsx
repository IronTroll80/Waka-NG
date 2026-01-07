'use client'

import styles from './shop.module.css'
import Image from 'next/image'
import ProductCard from './productCard'
import { BsCaretDown } from 'react-icons/bs'
import { FaX } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

type Product = {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
}


export default function Shop (){

    const [showMenu, setShowMenu] = useState(false)
    const [showList, setShowList] = useState(true)
    const [showOsList, setShowOsList] = useState(true)
    const [showProList, setShowProList] = useState(true)
    const [products, setProducts] = useState <Product[]>([])

    useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select(`
          id,
          name,
          description,
          price,
          image_url,
          category
        `)

      if (error) {
        console.error('Error fetching products:', error)
      } else {
        setProducts(data)
      }
    }

    fetchProducts()
    }, [])

    return (
        <>
        <div className= {styles.container}>
            
            <div className= {styles.topnav}>
                <div className= {styles.left}>
                    <p>Home/Marketplace/Laptops</p>
                    <h3>Laptops</h3>
                </div>
                <div className= {styles.right} onClick={()=>{setShowMenu(true)}}>
                    <Image src={'/filter.svg'} alt='filter' width={30} height={30}/>
                </div>
            </div>
            <div className= {styles.alignContainer}>
                <div className= {styles.desktopMenu}>
                    <div className= {styles.priceBox}>
                        <h3>Price</h3>
                        <div className= {styles.minMax}>
                            <div className= {styles.inputBox}>
                                <span>₦</span>
                                <input type='text'/>
                                <p>Min</p>
                            </div>
                            <div className= {styles.inputBox}>
                                <span>₦</span>
                                <input type='text'/>
                                <p>Max</p>
                            </div>
                        </div>
                    </div>
                    <div className= {styles.brandBox}>
                        <div className= {styles.brandBoxTop}>
                            <h3>Brand</h3>
                            <p onClick={()=>{setShowList(!showList)}}><BsCaretDown/></p>
                        </div>
                        {showList && 
                            <div className= {styles.brandBoxBody}>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Asus</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Dell</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Lenovo</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>HP</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Samsung</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Toshiba</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>MSI</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Acer</p>
                                </div>
                            </div>
                        }
                    </div>
                    
                    <div className= {styles.brandBox}>
                        <div className= {styles.brandBoxTop}>
                            <h3>Operating System</h3>
                            <p onClick={()=>{setShowOsList(!showOsList)}}><BsCaretDown/></p>
                        </div>
                        {showOsList && 
                            <div className= {styles.brandBoxBody}>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Windows</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>MacOS</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Linux</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className= {styles.brandBox}>
                        <div className= {styles.brandBoxTop}>
                            <h3>Processor</h3>
                            <p onClick={()=>{setShowProList(!showProList)}}><BsCaretDown/></p>
                        </div>
                        {showProList && 
                            <div className= {styles.brandBoxBody}>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Core-i7</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Core-i9</p>
                                </div>
                                <div className= {styles.checkbox}>
                                    <input type='checkbox'/>
                                    <p>Core-i5</p>
                                </div>
                            </div>
                        }
                    </div>
                    <button className= {styles.saveButton}>Save Changes</button>
                </div>
                <div className= {styles.productContainer}>
                    {products.map((product)=>(
                        <ProductCard image='/testLaptop4.jpg' title= {product.name} key={product.id} price={product.price} category= {'kone'}/>
                    ))}
                </div>
                <p>Load More</p>
            </div>
        </div>
        {showMenu &&
        <div className= {styles.mobileMenuContainer}>
            <div className= {styles.mobileMenu}>
                <div className= {styles.close} onClick={()=>{setShowMenu(false)}}>
                    <button><FaX/></button>
                </div>
                <div className= {styles.priceBox}>
                    <h3>Price</h3>
                    <div className= {styles.minMax}>
                        <div className= {styles.inputBox}>
                            <span>₦</span>
                            <input type='text'/>
                            <p>Min</p>
                        </div>
                        <div className= {styles.divider}>
                            <i>—</i>
                        </div>
                        <div className= {styles.inputBox}>
                            <span>₦</span>
                            <input type='text'/>
                            <p>Max</p>
                        </div>
                    </div>
                </div>
                <div className= {styles.brandBox}>
                    <div className= {styles.brandBoxTop}>
                        <h3>Brand</h3>
                        <p onClick={()=>{setShowList(!showList)}}><BsCaretDown/></p>
                    </div>
                    {showList && 
                        <div className= {styles.brandBoxBody}>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Asus</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Dell</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Lenovo</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>HP</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Samsung</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Toshiba</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>MSI</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Acer</p>
                            </div>
                        </div>
                    }
                </div>
                
                <div className= {styles.brandBox}>
                    <div className= {styles.brandBoxTop}>
                        <h3>Operating System</h3>
                         <p onClick={()=>{setShowOsList(!showOsList)}}><BsCaretDown/></p>
                    </div>
                    {showOsList && 
                        <div className= {styles.brandBoxBody}>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Windows</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>MacOS</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Linux</p>
                            </div>
                        </div>
                    }
                </div>
                <div className= {styles.brandBox}>
                    <div className= {styles.brandBoxTop}>
                        <h3>Processor</h3>
                         <p onClick={()=>{setShowProList(!showProList)}}><BsCaretDown/></p>
                    </div>
                    {showProList && 
                        <div className= {styles.brandBoxBody}>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Core-i7</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Core-i9</p>
                            </div>
                            <div className= {styles.checkbox}>
                                <input type='checkbox'/>
                                <p>Core-i5</p>
                            </div>
                        </div>
                    }
                </div>
                <button className= {styles.saveButton}>Save Changes</button>
            </div>
            </div>
        }
                
        </>
    )
}