'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { useSearch } from '../context/searchContext'
import Link from 'next/link'




export default function Header (){

    const { searchTerm, setSearchTerm } = useSearch()
    const [modalShown, setModalShown] = useState(false)
    const [showDropdown, setShowDropdown] = useState ('')
    const categories = [
        
        'Tablets',
        'Phones',
        'Accessories',
        'Smartwatches',
        'Speakers',
        'Earbuds',
        'Powerbanks'
    ]

    return(
        <>
        <div className= {styles.container}>
            <div className = {styles.logo}>
                <Image src={'/logo_white.svg'} alt='Logo' width={40} height={40}/>
            </div>
            <div className= {styles.search}>
                <input type='search' placeholder='Search for items' onChange={(e) => setSearchTerm(e.target.value)}/>
                <span><MdSearch/></span>
            </div>
            <div className= {styles.menuButton}>
                <button onClick={()=>{setModalShown(true)}}><FaBars/> </button>
            </div>
            <div className= {styles.miscButtons}> 
                <button><Image src={'./user.svg'} alt='user' width={20} height={20} title='User'/></button>
                <button><Image src={'./settings.svg'} alt='settings' width={20} height={20} title='Settings'/></button>
                <button><Image src={'./cart.svg'} alt='cart' width={20} height={20} title='Cart'/></button>
            </div>
            
        </div>
        <div className= {styles.navBarContainer}>
            <div className= {styles.navBar}>
                {categories.map((category) => (
                    <div key={category} className={styles.navItem}>
                        <Link href={`/marketplace/${category.replace(/\s+/g, '').toLowerCase()}`}>
                        <p>{category} <FaChevronDown/></p>
                        </Link>
                    </div>
                    ))
                }
                        
            </div>
        </div>
        <div className={`${styles.mobileMenuContainer} ${
                            modalShown ? styles.show : styles.hide
                        }`}>
            <div className= {styles.mobileMenu}>
                <div className= {styles.topItems}>
                    <Image src={'./logo_white.svg'} alt='Logo' width={80} height={80} className= {styles.menuLogo}/>
                    <span onClick={()=>{setModalShown(false)}}><FaX/></span>
                </div>
                <div className={styles.categories}>
                    {categories.map((category) => (
                        <Link
                        key={category}
                        href={`/marketplace/${category.toLowerCase()}`}
                        >
                        <p>{category}</p>
                        </Link>
                    ))}
                </div>

                <hr/>

                <div className= {styles.misc}>
                    <h5>Coming Soon <FaChevronDown/> </h5>
                    <p>Manage your account</p>
                    <p>Your Cart</p>
                    <p>Settings</p>
                </div>
            </div>
        </div>

        
        </>
    )
}