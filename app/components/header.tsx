'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { useSearch } from '../context/searchContext'




export default function Header (){

    const { searchTerm, setSearchTerm } = useSearch()
    const [modalShown, setModalShown] = useState(false)
    const [showDropdown, setShowDropdown] = useState ('')

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
        <div className= {styles.navBar}>
                    <div className= {styles.navItem}  onMouseOver={()=>{setShowDropdown('laptops')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p>Laptops <FaChevronDown/> </p>
                        <div className= {showDropdown === 'laptops' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem}  onMouseOver={()=>{setShowDropdown('accessories')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p>Accessories <FaChevronDown/> </p>
                        <div className= {showDropdown === 'accessories' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem} onMouseOver={()=>{setShowDropdown('gadgets')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p >Gadgets <FaChevronDown/> </p>
                        <div className= {showDropdown === 'gadgets' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem} onMouseOver={()=>{setShowDropdown('phones')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p >Phones <FaChevronDown/> </p>
                        <div className= {showDropdown === 'phones' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem}  onMouseOver={()=>{setShowDropdown('compories')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p>Computer Accessories <FaChevronDown/> </p>
                        <div className= {showDropdown === 'compories' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem}  onMouseOver={()=>{setShowDropdown('audio')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p>Audio and Music Equipment <FaChevronDown/> </p>
                        <div className= {showDropdown === 'audio' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    <div className= {styles.navItem}  onMouseOver={()=>{setShowDropdown('compware')}} onMouseOut={()=>{setShowDropdown('')}}>
                        <p>Computer Hardware <FaChevronDown/> </p>
                        <div className= {showDropdown === 'compware' ? `${styles.dropdown} ${styles.active}` : `${styles.inactive}`}>
                            <p>Gaming</p>
                            <p>Samsung</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                            <p>Iphone</p>
                        </div>
                    </div>
                    
            </div>

        {modalShown && <div className= {styles.mobileMenuContainer}>
            <div className= {styles.mobileMenu}>
                <div className= {styles.topItems}>
                    <Image src={'./logo_white.svg'} alt='Logo' width={80} height={80} className= {styles.menuLogo}/>
                    <span onClick={()=>{setModalShown(false)}}><FaX/></span>
                </div>
                <div className= {styles.categories}>
                    <p>Laptops <FaChevronDown/> </p>
                    <p>Accessories <FaChevronDown/> </p>
                    <p>Gadgets <FaChevronDown/> </p>
                    <p>Phones <FaChevronDown/> </p>
                    <p>Computer Accessories <FaChevronDown/> </p>
                    <p>Audio and Music Equipment <FaChevronDown/> </p>
                    <p>Computer Hardware <FaChevronDown/> </p>
                </div>

                <hr/>

                <div className= {styles.misc}>
                    <p>Manage your account</p>
                    <p>Your Cart</p>
                    <p>Settings</p>
                </div>
            </div>
        </div>}

        
        </>
    )
}