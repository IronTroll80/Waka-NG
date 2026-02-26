'use client'

import styles from './finServices.module.css'
import Link from 'next/link'

export default function FinServices() {

  const whatsappNumber = "2348133896617"
  const message = encodeURIComponent(
    "Hello Waka NG, I’m interested in your POS services."
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section className={styles.container}>

      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.badge}>Financial Services</span>

          <h2>Start or Grow Your POS Business with Waka NG</h2>

          <p>
            Launch a POS service in one day or improve your current business 
            with reliable devices, setup support, and guidance.
          </p>

          <div className={styles.buttons}>
            <Link href="/services" className={styles.primaryBtn}>
              Learn More
            </Link>

            <a 
              href={whatsappLink} 
              target="_blank" 
              className={styles.secondaryBtn}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <h4>Services Include:</h4>
          <ul>
            <li>Cash Withdrawals</li>
            <li>Cash Deposits</li>
            <li>Airtime & Data</li>
            <li>POS Setup & Upgrade</li>
          </ul>
        </div>
      </div>

    </section>
  )
}