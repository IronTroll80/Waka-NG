'use client'

import Image from 'next/image'
import styles from './header.module.css'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { useSearch } from '../context/searchContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { searchTerm, setSearchTerm } = useSearch()
  const [modalShown, setModalShown] = useState(false)
  const router = useRouter()

  const categories = [
    'Tablets',
    'Phones',
    'Accessories',
    'Smartwatches',
    'Speakers',
    'Earbuds',
    'Powerbanks'
  ]

  const handleSearchSubmit = () => {
    const query = searchTerm.trim()
    router.push(`/marketplace`)
  }

  return (
    <>
      <div className={styles.container}>
        <Link href={'/'}>
        <div className={styles.logo}>
          <Image src={'/logo_white.svg'} alt='Logo' width={40} height={40} />
        </div>
        </Link>

        {/* SEARCH FORM */}
        <form className={styles.search}>
            <input
                type='search'
                placeholder='Search for items'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onInput= {handleSearchSubmit}
            />
            <button type='submit'><MdSearch /></button>
            </form>

        <div className={styles.menuButton}>
          <button onClick={() => setModalShown(true)}><FaBars /></button>
        </div>

        <div className={styles.miscButtons}>
          <button><Image src={'./user.svg'} alt='user' width={20} height={20} title='User' /></button>
          <button><Image src={'./settings.svg'} alt='settings' width={20} height={20} title='Settings' /></button>
          <button><Image src={'./cart.svg'} alt='cart' width={20} height={20} title='Cart' /></button>
        </div>
      </div>

      {/* NAVBAR */}
      <div className={styles.navBarContainer}>
        <div className={styles.navBar}>
          {categories.map((category) => (
            <div key={category} className={styles.navItem}>
              <Link href={`/marketplace/${category.replace(/\s+/g, '').toLowerCase()}`}>
                <p>{category} <FaChevronDown /></p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenuContainer} ${modalShown ? styles.show : styles.hide}`}>
        <div className={styles.mobileMenu}>
          <div className={styles.topItems}>
            <Image src={'./logo_white.svg'} alt='Logo' width={80} height={80} className={styles.menuLogo} />
            <span onClick={() => setModalShown(false)}><FaX /></span>
          </div>
          <div className={styles.categories}>
            {categories.map((category) => (
              <Link key={category} href={`/marketplace/${category.toLowerCase()}`}>
                <p>{category}</p>
              </Link>
            ))}
          </div>

          <hr />

          <div className={styles.misc}>
            <Link href = '/services'><p className= {styles.finServices}>Financial Services</p></Link>
            <h5>Coming Soon <FaChevronDown /></h5>
            <p className= {styles.miscItem}>Manage your account</p>
            <p className= {styles.miscItem}>Your Cart</p>
            <p className= {styles.miscItem}>Settings</p>
          </div>
        </div>
      </div>
    </>
  )
}