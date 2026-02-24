'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./heroProductCarousel.module.css";
import { supabase } from '../utils/supabaseClient'

type Product = {
  id: string
  name: string
  price: number
  category: string
  categoryName: string
  images: string[]
  slug: string
}

export default function HeroProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  // ✅ Fetch products once
  useEffect(() => {
    async function fetchTop() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('categoryName', 'speakers')
        .limit(5);

      if (error) {
        console.error(error);
        return;
      }

      setProducts(data || []);
    }

    fetchTop();
  }, []);

  // ✅ Reset index if products change
  useEffect(() => {
    setCurrentIndex(0);
  }, [products]);

  // ✅ Safe interval (no stale closure, no modulo zero)
  useEffect(() => {
    if (products.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        return next >= products.length ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [products]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProduct = products[currentIndex];

  // ✅ Prevent crash before data loads
  if (!currentProduct) return null;

  return (
    <div className={styles.right}>
      <div className={styles.box}>
        <div className={styles.imageWrapper}>
          {products.map((product, index) => (
            <Image
              key={product.id}
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${product.slug}.jpg`}
              alt={product.name}
              fill
              className={`${styles.productImage} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>

        <div key={currentIndex} className={styles.textContent}>
          <p className={styles.productName}>{currentProduct.name}</p>
          <h4 className={styles.price}>₦ {currentProduct.price}</h4>
        </div>

        <button className={styles.purchaseButton}>
          See Details
        </button>

        <div className={styles.imageNav}>
          {products.map((_, index) => (
            <div
              key={index}
              className={`${styles.imageCircle} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}