'use client'

import styles from './ourDetails.module.css'
import { MdSmartphone } from 'react-icons/md'
import { BiEnvelope, BiLocationPlus, BiLogoWhatsapp } from 'react-icons/bi'

export default function OurDetails() {
  // Array of contact details
  const contactDetails = [
    {
      icon: <MdSmartphone />,
      title: '+234 812 345 6789',
      description: 'Call us for any inquiries or support.',
    },
    {
      icon: <BiEnvelope />,
      title: 'support@waka.ng',
      description: 'Send us an email and we’ll respond within 24 hours.',
    },
    {
      icon: <BiLocationPlus />,
      title: 'Waka NG Headquarters, Lagos, Nigeria',
      description: 'Visit our store or head office for in-person support.',
    },
    {
      icon: <BiLogoWhatsapp />,
      title: '+234 812 345 6789',
      description: 'Chat with us on WhatsApp for quick support.',
    },
  ]

  return (
    <div className={styles.container}>
      {contactDetails.map((detail, i) => (
        <div key={i} className={styles.detail}>
          <p>
            {detail.icon} {detail.title}
          </p>
          <span>{detail.description}</span>
        </div>
      ))}
    </div>
  )
}