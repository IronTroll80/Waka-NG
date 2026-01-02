'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { FaBars, FaCaretDown, FaSearch } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { BsCaretDown } from 'react-icons/bs'
import { useState } from 'react'
import { FaX } from 'react-icons/fa6'

export default function Header (){


    const [modalShown, setModalShown] = useState(false)

    return(
        <>
        <div className= {styles.container}>
            <div className = {styles.logo}>
                <Image src={'/logo_white.svg'} alt='Logo' width={40} height={40}/>
            </div>
            <div className= {styles.search}>
                <input type='search' placeholder='Search for items'/>
                <span><MdSearch/></span>
            </div>
            <div className= {styles.menuButton}>
                <button onClick={()=>{setModalShown(true)}}><FaBars/> </button>
            </div>
            <div className= {styles.miscButtons}> 
                <button><Image src={'./user.svg'} alt='user' width={20} height={20} /></button>
                <button><Image src={'./settings.svg'} alt='settings' width={20} height={20} /></button>
                <button><Image src={'./cart.svg'} alt='cart' width={20} height={20} /></button>
            </div>
        </div>

        {modalShown && <div className= {styles.mobileMenuContainer}>
            <div className= {styles.mobileMenu}>
                <div className= {styles.topItems}>
                    <Image src={'./logo_white.svg'} alt='Logo' width={80} height={80} className= {styles.menuLogo}/>
                    <span onClick={()=>{setModalShown(false)}}><FaX/></span>
                </div>
                <div className= {styles.categories}>
                    <p>Laptops <BsCaretDown/> </p>
                    <p>Accessories <BsCaretDown/> </p>
                    <p>Gadgets <BsCaretDown/> </p>
                    <p>Phones <BsCaretDown/> </p>
                    <p>Computer Accessories <BsCaretDown/> </p>
                    <p>Audio and Music Equipment <BsCaretDown/> </p>
                    <p>Computer Hardware <BsCaretDown/> </p>
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