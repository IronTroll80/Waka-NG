import Link from 'next/link'
import styles from './hero.module.css'
import HeroProductCarousel from './heroProductCarousel'

export default function Hero(){
    return(
        <>
            <div className= {styles.container}>
                <div className= {styles.overlay}>
                    <div className= {styles.left}>
                        <h3>Every <span>Big Idea</span> Starts With the <span>Right Device</span></h3>
                        <p>The assignment. The business. The content. The late-night grind. At Waka NG, we don’t just sell gadgets — we support journeys. Yours included.</p>
                        <div className= {styles.buttonGroup}>
                            <button  className= {styles.primary}><Link href={'/marketplace'} className= {styles.link}>Shop Now </Link></button>
                            <button className= {styles.secondary}>Explore Services</button>
                        </div>
                    </div>
{/* <div className={styles.right}>
  <div className={styles.box}>
    <div className={styles.imageWrapper}>
      <Image src={'/oraimo.png'} alt='product' fill className={styles.productImage}/>
    </div>
    <p className={styles.productName}>Oraimo Space Box Pro</p>
    <h4 className={styles.price}>N 130,000</h4> 
    <button className={styles.purchaseButton}>Purchase</button>
    <div className={styles.imageNav}>
      <div className={`${styles.imageCircle} ${styles.active}`}></div>
      <div className={styles.imageCircle}></div>
      <div className={styles.imageCircle}></div>
      <div className={styles.imageCircle}></div>
    </div>
  </div>
</div> */}
<HeroProductCarousel/>


                       

                    </div>
                </div>
        </>
    )
}