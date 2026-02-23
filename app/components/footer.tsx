import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer (){
    return(
        <>
        <div className= {styles.container}>
            <div className= {styles.logo}>
                <Image src = {'./logo_white.svg'} alt = {'logo'} width = {100} height = {100}/>
            </div>
            <div className= {styles.pages}>
                <Link className = {styles.link} href={'/about'}><p>About Us</p></Link>
                <Link className = {styles.link} href={'/legal'}><p>Terms and Conditions</p></Link>
                <Link className = {styles.link} href={'/legal'}><p>Privacy Policy</p></Link>
                <Link className = {styles.link} href={'/contact-us'}><p>Contact us</p></Link>
                <Link className = {styles.link} href={'/legal'}><p> Warranty and Return Policy</p></Link>
            </div>
            <div className= {styles.pages}>
                <Link className = {styles.link} href={'/'}><p>Home</p></Link>
                <Link className = {styles.link} href={'/marketplace'}><p>Shop</p></Link>
                <Link className = {styles.link} href={'/cart'}><p>Cart</p></Link>
                <Link className = {styles.link} href={'/settings'}><p>Settings</p></Link>
            </div>
            <div className= {styles.pages}>
                <Link className = {styles.link} href={'/marketplace/phones'}><p>Phones</p></Link>
                <Link className = {styles.link} href={'/marketplace/smartwatches'}><p>SmartWatches</p></Link>
                <Link className = {styles.link} href={'/marketplace/tablets'}><p>Tablets</p></Link>
                <Link className = {styles.link} href={'/marketplace/accessories'}><p>Accesories</p></Link>
                <Link className = {styles.link} href={'/marketplace/speakers'}><p>Speakers</p></Link>
                <Link className = {styles.link} href={'/marketplace/powerbanks'}><p>Powerbanks</p></Link>
            </div>
            <div className= {styles.newsletter}>
                <p>Register for our Newsletter</p>

                <input type='email' placeholder='Email'/><br/>
                <button> Sign Up </button>
            </div>
        </div>
        </>
    )
}