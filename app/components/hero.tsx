import Link from 'next/link'
import styles from './hero.module.css'

export default function Hero(){
    return(
        <>
            <div className= {styles.container}>
                <div className= {styles.overlay}>
                    <h3>Trusted Phones, Laptops and Gadgets</h3>
                    <p>Original devices, fair pricing and fast delivery to anywhere in Nigeria</p>
                    <button><Link href={'/marketplace'} className= {styles.link}>Shop Now </Link></button>
                </div>
            </div>
        </>
    )
}