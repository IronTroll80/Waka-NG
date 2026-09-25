'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { Search, ShoppingBag, Menu, Xmark } from 'iconoir-react'
import { useState } from 'react'
import DropDownContent from './dropdown'
import { fastSelling, dropdownCategories } from '../data/dropdown'
import SearchBar from './searchbar'
import Cart from './cart'
import Link from 'next/link'
import { Product } from '../lib/products'
import Whatsapp from './whatsapp'

const navItems = [
    {
        name: 'HOME',
        href: '/',
        type: 'link'
    },
    {
        name: 'SHOP',
        href: '/shop',
        type: 'dropdown'
    },
    {
        name: 'SERVICES',
        href: '/services',
        type: 'link'
    },
    {
        name: 'CONTACT',
        href: '/contact',
        type: 'link'
    },
    {
        name: 'ABOUT',
        href: '/about',
        type: 'link'
    }
]

interface Props {
    products: Product[]
}

export default function Header({products}:Props) {
    const [shopdown, setShopdown] = useState(false)
    const [searchDown, setSearchDown] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <>
            <div className={styles.header}>
                <p>SHOP FROM CHINA. WE&apos;LL GET IT TO NIGERIA.</p>
            </div>

            <div className={styles.navbar}>
                <ul className={styles.desktopNav}>
                    {navItems.map((item, index) => (
                        <li key={`${item.name}-${index}`} className={styles.navItem}>
                            {item.type === 'link' ? (
                                <a href={item.href}>{item.name}</a>
                            ) : (
                                <div
                                    className={styles.dropdown}
                                    onMouseEnter={() => setShopdown(true)}
                                    onMouseLeave={() => setShopdown(false)}
                                >
                                    <span><Link href={'/shop'}>{item.name}</Link></span>

                                    {shopdown && (
                                        <DropDownContent
                                            categories={dropdownCategories}
                                            fastSelling={fastSelling}
                                            products={products}
                                        />
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <Link href={'/'}>
                    <Image
                        className={styles.logo}
                        src="/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                </Link>

                <div className={styles.rightNav}>
                    <Search
                        color="#171717"
                        width={24}
                        height={24}
                        onClick={() => setSearchDown(true)}
                    />

                    <ShoppingBag
                        color="#171717"
                        width={24}
                        height={24}
                        onClick={() => setShowCart(true)}
                    />

                    <Image
                        src="/nigeria.svg"
                        alt="nga"
                        width={24}
                        height={24}
                    />

                    <button
                        className={styles.menuButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <Xmark /> : <Menu />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            {searchDown && (
                <SearchBar
                    onClose={() => setSearchDown(false)}
                    products={products}
                />
            )}

            {showCart && (
                <Cart onClose={() => setShowCart(false)} />
            )}
        <Whatsapp />
        </>
    )
}