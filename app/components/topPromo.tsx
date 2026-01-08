'use client'

import { useState } from 'react'
import styles from './topPromo.module.css'
import { FaX } from 'react-icons/fa6'
import Image from 'next/image'

export default function TopPromo(){

    const [showDeals, setShowDeals] = useState(false)

    return(
        <>
            <div className= {styles.container}>
                <p>Check out our new amazing deals <i onClick={()=>{setShowDeals(true)}}>here!</i></p>
            </div>

            {showDeals && 
            
                <div className= {styles.modal}>
                    <div className= {styles.modalContent}>
                        <p><span onClick={()=>{setShowDeals(false)}}><FaX/></span></p>
                        <div className= {styles.imageWrapper}>
                            <Image src = {'/noDeals.svg'} alt='Promo' fill/>
                        </div>
                        <h4>No Active Deals...</h4>
                        <i>Please come back Later</i>
                        <button className= {styles.comeBack} onClick={()=>{setShowDeals(false)}}>I'll come back later</button>
                    </div>
                </div>
        
            }
        </>
    )
}