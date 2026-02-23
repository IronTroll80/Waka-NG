'use client'

import Image from 'next/image'
import styles from './about.module.css'

export default function About() {

  const whyUsImages = [
    '/background1.jpg',
    '/background2.jpg',
    '/background3.jpg',
    '/background4.jpg',
  ]

  return (
    <div className={styles.container}>

      {/* Introduction Section */}
      <div className={styles.introduction}>
        <div className={styles.introContent}>
          <h3>About Waka NG</h3>
          <p>
            Waka NG is Nigeria’s leading online electronics and gadgets marketplace, 
            providing reliable access to smartphones, laptops, accessories, and more. 
            Our mission is to make shopping simple, secure, and convenient for everyone. 
            We focus on quality products, competitive pricing, and excellent customer service.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={'/logo_blue.svg'} alt='Waka NG Logo' fill />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyus}>
        <div className={styles.textContent}>
          <h3>Why Choose Us</h3>
          <p>
            Waka NG stands out because we combine a wide selection of electronics 
            with fast delivery, trusted sellers, and responsive support. 
            Whether you’re shopping for the latest smartphone or essential accessories, 
            we ensure a seamless shopping experience.
          </p>
        </div>
        <div className={styles.imageSection}>
          {whyUsImages.map((src, i) => (
            <div key={i} className={styles.imageSectionWrapper}>
              <Image src={src} alt={`Why Choose Us ${i + 1}`} fill />
            </div>
          ))}
        </div>
      </div>

      {/* What We Sell Section */}
      <div className={styles.wesell}>
        <div>
          <h3>What We Sell</h3>
          <p>
            Waka NG offers a wide range of products including laptops, smartphones, 
            tablets, headphones, music equipment, and other electronics. 
            We partner with trusted brands and verified sellers to ensure you get 
            authentic products at competitive prices. From personal gadgets to office setups, 
            we have everything to meet your tech needs.
          </p>
        </div>
      </div>

    </div>
  )
}