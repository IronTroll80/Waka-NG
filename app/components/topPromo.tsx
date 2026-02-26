'use client'

import { useState } from 'react'
import styles from './topPromo.module.css'
import { FaX } from 'react-icons/fa6'
import Image from 'next/image'

export default function TopPromo() {
  const [showDeals, setShowDeals] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <p>
          Check out our new amazing deals{' '}
          <button 
            className={styles.linkButton} 
            onClick={() => setShowDeals(true)}
          >
            here!
          </button>
        </p>
      </div>

      {showDeals && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton} 
              onClick={() => setShowDeals(false)}
              aria-label="Close Deals Modal"
            >
              <FaX />
            </button>

            <div className={styles.imageWrapper}>
              <Image src="/noDeals.svg" alt="Promo" fill />
            </div>

            <h4>No Active Deals...</h4>
            <p className={styles.subText}>Please come back later</p>

            <button 
              className={styles.comeBack} 
              onClick={() => setShowDeals(false)}
            >
              I'll come back later
            </button>
          </div>
        </div>
      )}
    </>
  )
}