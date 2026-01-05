import Image from 'next/image'
import styles from './brands.module.css'

export default function Brands (){
    return(
        <>
        
        <div className= {styles.container}>
            <Image src = {'/brands.png'} alt = "brands" fill/>
        </div>
        
        </>
    )
}