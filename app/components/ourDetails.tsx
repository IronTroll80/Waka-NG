import styles from './ourDetails.module.css'
import { MdSmartphone } from 'react-icons/md'
import { BiEnvelope, BiLocationPlus, BiLogoWhatsapp } from 'react-icons/bi'

export default function OurDetails(){
    return(
        <>
        
        <div className= {styles.container}>
            <div className = {styles.detail}>
                <p><MdSmartphone/> +234 8123 456 789</p>
                <span>Lorem ipsum dolor sit amet consecteur adipiscing elit</span>
            </div>
            <div className = {styles.detail}>
                <p><BiEnvelope/> waka@gmail.com</p>
                <span>Lorem ipsum dolor sit amet consecteur adipiscing elit</span>
            </div>
            <div className = {styles.detail}>
                <p><BiLocationPlus/> Waka NG store</p>
                <span>Lorem ipsum dolor sit amet consecteur adipiscing elit</span>
            </div>
             <div className = {styles.detail}>
                <p><BiLogoWhatsapp/> +234 8123 456 789 </p>
                <span>Lorem ipsum dolor sit amet consecteur adipiscing elit</span>
            </div>
        </div>
        
        </>
    )
}