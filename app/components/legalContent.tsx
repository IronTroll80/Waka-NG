'use client'

import { useState } from 'react'
import styles from './legalContent.module.css'

export default function LegalContent (){

    const [activeButton, setActiveButton] = useState('warranty')

    return(
        <>
        
        <div className= {styles.container}>
            <div className= {styles.topButtons}>
                <button className= {activeButton === "warranty" ? `${styles.active}` : `${styles.inactive}`} 
                    onClick={()=>{setActiveButton('warranty')}}>Warranty</button>
                <button className= {activeButton === "privacy" ? `${styles.active}` : `${styles.inactive}`} 
                    onClick={()=>{setActiveButton('privacy')}}>Privacy-Policy</button>
                <button className= {activeButton === "terms" ? `${styles.active}` : `${styles.inactive}`} 
                    onClick={()=>{setActiveButton('terms')}}>Ts and Cs</button>
            </div>

            <div className={styles.heading}>
                <h3>Warranty/Return Policy</h3>
            </div>
            <div className= {styles.paragraph}>
                    Hp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG. 
                    Hp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 
                    Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core
                    - 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB 
                    SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit 
                    Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP 
                    Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader 
                    11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp
                    EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840
                     Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7
                    - 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB 
                     SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader 
                     Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG
            </div>
            <div className= {styles.paragraph}>
                    Hp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG. 
                    Hp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 
                    Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core
                    - 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB 
                    SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit 
                    Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP 
                    Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader 
                    11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp
                    EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840
                     Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7
                    - 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB 
                     SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader 
                     Windows 11 Pro + BAGHp EliteBook 840 Intel Core I7- 16GB RAM/1TB SSD/Backlit Keyboard/FP Reader Windows 11 Pro + BAG
            </div>
        </div>

        </>
    )
}