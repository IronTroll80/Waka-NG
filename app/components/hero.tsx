import Link from 'next/link'
import styles from './hero.module.css'
import HeroProductCarousel from './heroProductCarousel'
import Image from 'next/image'

export default function Hero(){
    return(
        <>
            <div className= {styles.container}>
                <div className= {styles.overlay}>
                  <div className= {styles.content}>
                    <div className= {styles.left}>
                        <div className= {styles.logo}>
                        </div>
                        <h3>Every <span>Big Idea</span> Starts With the <span>Right Device</span></h3>
                        <p>The assignment. The business. The content. The late-night grind. At Waka NG, we don’t just sell gadgets — we support journeys. Yours included.</p>
                        <div className= {styles.buttonGroup}>
                            <button  className= {styles.primary}><Link href={'/marketplace'} className= {styles.link}>Shop Now </Link></button>
                            <button className= {styles.secondary}>Explore Services</button>
                        </div>
                    </div>

                    <HeroProductCarousel/>
                  </div>

                       

                    </div>
                </div>
        </>
    )
}