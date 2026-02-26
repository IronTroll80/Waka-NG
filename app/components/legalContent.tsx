'use client'

import { useState } from 'react'
import styles from './legalContent.module.css'

type ContentKeys =  | 'privacy' | 'terms'

export default function LegalContent() {
  const [activeButton, setActiveButton] = useState<ContentKeys>('privacy')

  const content = {
    privacy: {
      heading: 'Privacy Policy',
      paragraph: `
        Waka NG respects your privacy and is committed to protecting your personal information. 
        We collect only the data necessary to provide our services, including order details and contact information. 
        Your data will never be shared with third parties without consent, except for processing orders and improving our services. 
        For full details, please read our complete Privacy Policy on our website.
      `,
    },
    terms: {
      heading: 'Terms & Conditions',
      paragraph: `
        By using Waka NG, you agree to our terms and conditions. This includes placing orders responsibly, 
        providing accurate information, and adhering to applicable laws. Waka NG reserves the right to cancel orders, 
        update product information, and modify these terms at any time. Users are encouraged to review the terms regularly.
      `,
    },
  }

  return (
    <div className={styles.container}>
      {/* Top Buttons */}
      <div className={styles.topButtons}>
        <button
          className={activeButton === 'privacy' ? styles.active : styles.inactive}
          onClick={() => setActiveButton('privacy')}
        >
          Privacy Policy
        </button>
        <button
          className={activeButton === 'terms' ? styles.active : styles.inactive}
          onClick={() => setActiveButton('terms')}
        >
          Terms & Conditions
        </button>
      </div>

      {/* Dynamic Heading */}
      <div className={styles.heading}>
        <h3>{content[activeButton].heading}</h3>
      </div>

      {/* Dynamic Paragraph */}
      <div className={styles.paragraph}>
        {content[activeButton].paragraph}
      </div>
    </div>
  )
}