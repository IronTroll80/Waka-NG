'use client'

import Image from "next/image"
import styles from "./whatsapp.module.css"
import { useState } from "react"

export default function Whatsapp (){

    const [show, setShow] = useState (false)

    return(
        <>
        
        <div className= {styles.container}>
            <div className= {show ? `${styles.contact} ${styles.show}` : `${styles.contact} ${styles.hide}`}>
                    <p>Get in Touch with WAKA NG.</p>
                    <button> Message us on whatsapp</button>
                </div>
            <div className= {styles.button} onClick={()=>{setShow(!show)}}>
                <Image src={'/whatsapp.svg'} alt="whatsapp" width={50} height={50}/>
            </div>
        </div>
        
        </>
    )
}