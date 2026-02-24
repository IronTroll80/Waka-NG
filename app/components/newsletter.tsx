import Image from 'next/image'
import styles from './newsletter.module.css'
import Link from 'next/link'

export default function Newsletter (){
    return(
        <>
        
        <div className= {styles.container}>
                <h3>Want The <br/>Latest Updates?</h3>
                <p>Join Our whatsapp Group </p>
                <div className= {styles.inputContainer}>
                    <input type='text' placeholder='Phone Number'/>
                    <Link href={`https://wa.me/2348133896617?text=${encodeURIComponent(
                                    `Hi Waka NG, I wish to join the updates group.`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ><button>
                        Send</button></Link>
                </div>
                
        </div>

        </>
    )
}