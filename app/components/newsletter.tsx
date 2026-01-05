import Image from 'next/image'
import styles from './newsletter.module.css'

export default function Newsletter (){
    return(
        <>
        
        <div className= {styles.container}>
                <h3>Want The <br/>Latest Updates?</h3>
                <p>Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
                <div className= {styles.inputContainer}>
                    <input type='text' placeholder='Email'/>
                    <button>Send</button>
                </div>
                
        </div>

        </>
    )
}