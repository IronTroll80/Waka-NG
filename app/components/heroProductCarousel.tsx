'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./heroProductCarousel.module.css";

const products = [
  { image: '/oraimo.png', title: 'Oraimo Space Box Pro', price: '130,000' },
  { image: '/iphonee.png', title: 'iPhone 17 Pro Max', price: '1,300,000' },
  { image: '/samsung.png', title: 'Samsung Galaxy Tab A9', price: ' 220,000' },
  { image: '/jbl.png', title: 'JBL Tune 720BT', price: ' 30,000' },
];

export default function HeroProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToIndex = (index: number) => setCurrentIndex(index);

  const currentProduct = products[currentIndex];


return (
  <div className={styles.right}>
    <div className={styles.box}>
      <div className={styles.imageWrapper}>
        {products.map((product, index) => (
          <Image
            key={index}
            src={product.image}
            alt={product.title}
            fill
            className={`${styles.productImage} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>


      <div key={currentIndex} className={styles.textContent}>
        <p className={styles.productName}>{currentProduct.title}</p>
        <h4 className={styles.price}>₦ {currentProduct.price}</h4>
      </div>

      <button className={styles.purchaseButton}>See Details</button>

      <div className={styles.imageNav}>
        {products.map((_, index) => (
          <div
            key={index}
            className={`${styles.imageCircle} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

}
