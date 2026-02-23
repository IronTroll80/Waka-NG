'use client'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './bentoCategories.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BentoCategories (){

    const [showButtonPhones, setShowButtonPhones] = useState(false)
    const [showButtonHead, setShowButtonHead] = useState(false)
    const [showButtonAss, setShowButtonAss] = useState(false)
    const [showButtonLap, setShowButtonLap] = useState(false)
    const [showButtonMusic, setShowButtonMusic] = useState(false)
    const [showButtonTablet, setShowButtonTablet] = useState(false)

    return(
        <>
        
        <div className={styles.container}>
<div className={`${styles.card} ${styles.phones}`}>
  <Link href="/marketplace/phones" className={styles.cardLink}>
  <div
    className={styles.overlay}
    onMouseOver={() => setShowButtonPhones(true)}
    onMouseOut={() => setShowButtonPhones(false)}
  >
    <h3>PHONES</h3>
    <button className={showButtonPhones ? styles.active : styles.inactive}>
      {showButtonPhones && `Shop`}
    </button>
  </div>  </Link>
</div>

<div className={`${styles.card} ${styles.headphones}`}>
  <Link href="/marketplace/headphones" className={styles.cardLink}>
  <div
    className={styles.overlay}
    onMouseOver={() => setShowButtonHead(true)}
    onMouseOut={() => setShowButtonHead(false)}
  >
    <h3>HEADPHONES</h3>
    <button className={showButtonHead ? styles.active : styles.inactive}>
      {showButtonHead && `Shop`}
    </button>
  </div>  </Link>
</div>

<div className={`${styles.card} ${styles.accessories}`}>
  <Link href="/marketplace/accessories" className={styles.cardLink}>
  <div
    className={styles.overlay}
    onMouseOver={() => setShowButtonAss(true)}
    onMouseOut={() => setShowButtonAss(false)}
  >
    <h3>ACCESSORIES</h3>
    <button className={showButtonAss ? styles.active : styles.inactive}>
      {showButtonAss && `Shop`}
    </button>
  </div>  </Link>
</div>

<div className={`${styles.card} ${styles.laptops}`}>
  <Link href="/marketplace/laptops" className={styles.cardLink}>
  <div
    className={styles.overlay}
    onMouseOver={() => setShowButtonLap(true)}
    onMouseOut={() => setShowButtonLap(false)}
  >
    <h3>LAPTOPS</h3>
    <button className={showButtonLap ? styles.active : styles.inactive}>
      {showButtonLap && `Shop`}
    </button>
  </div>  </Link>
</div>

<div className={`${styles.card} ${styles.music}`}>
  <Link href="/marketplace/music" className={styles.cardLink}>
    <div
        className={styles.overlay}
        onMouseOver={() => setShowButtonMusic(true)}
        onMouseOut={() => setShowButtonMusic(false)}
    >
        <h3>MUSIC EQUIPMENT</h3>
        <button className={showButtonMusic ? styles.active : styles.inactive}>
        {showButtonMusic && `Shop`}
        </button>
    </div>
  </Link>
</div>

<div className={`${styles.card} ${styles.tablets}`}>
  <Link href="/marketplace/tablets" className={styles.cardLink}>
  <div
    className={styles.overlay}
    onMouseOver={() => setShowButtonTablet(true)}
    onMouseOut={() => setShowButtonTablet(false)}
  >
    <h3>TABLETS</h3>
    <button className={showButtonTablet ? styles.active : styles.inactive}>
      {showButtonTablet && `Shop`}
    </button>
  </div>
  </Link>
</div>
        </div>


        </>
    )
}