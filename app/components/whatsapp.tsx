'use client'

import Image from "next/image";
import styles from "./whatsapp.module.css";
import { useState, useEffect } from "react";

export default function Whatsapp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Chat Card */}
      {show && (
        <div className={`${styles.chatCard} ${show ? styles.show : styles.hide}`}>
          <div className={styles.header}>
            <Image
              src="/logo_white.svg"
              alt="WAKA NG"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.info}>
              <p className={styles.name}>WAKA NG</p>
              <p className={styles.status}>Online</p>
            </div>
            <button className={styles.closeButton} onClick={() => setShow(false)}>×</button>
          </div>

          <div className={styles.bubble}>
            <p>Hi there! 👋 Need help choosing a gadget?</p>
          </div>

           <a
              href={`https://wa.me/2348133896617?text=${encodeURIComponent(
                `Hi Waka NG, I need help choosing a gadget.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.chatButton}
            >
            <Image
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            <span>Start Chat</span>
          </a>
        </div>
      )}

      {!show && (
        <div className={styles.fab} onClick={() => setShow(true)}>
          <Image src="/whatsapp.svg" alt="WhatsApp" width={50} height={50} />
        </div>
      )}
    </div>
  );
}
