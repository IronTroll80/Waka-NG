'use client'

import styles from './comingSoon.module.css'
import { FaHourglassHalf } from 'react-icons/fa6'

interface ComingSoonProps {
  featureName?: string
}

export default function ComingSoon({ featureName = "This feature" }: ComingSoonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FaHourglassHalf className={styles.icon} />
        <h2>{featureName} is Coming Soon!</h2>
        <p>
          We’re working hard to bring this feature to you. Stay tuned for updates!
        </p>
      </div>
    </div>
  )
}