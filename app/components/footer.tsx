import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer (){
    return(
        <>
        <div className= {styles.container}>
            <div className= {styles.logo}>
                <Image src = {'./logo_white.svg'} alt = {'logo'} width = {100} height = {100}/>
            </div>
            <div className= {styles.pages}>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Payment Guidelines</p>
                <p>Return Policy</p>
                <p>Warranty</p>
            </div>
            <div className= {styles.pages}>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Payment Guidelines</p>
                <p>Return Policy</p>
                <p>Warranty</p>
            </div>
            <div className= {styles.pages}>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Payment Guidelines</p>
                <p>Return Policy</p>
                <p>Warranty</p>
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