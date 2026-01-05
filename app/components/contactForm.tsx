import styles from './contactForm.module.css'


export default function ContactForm () {
    return(
        <>
        
        <div className= {styles.container}>
            <input type='email' placeholder='Email' className= {styles.email}/>
            <textarea placeholder='Message' className= {styles.message} rows={10}/>
            <button className= {styles.submit}>Submit</button>
        </div>
        
        </>
    )
}