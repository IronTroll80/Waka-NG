import Image from 'next/image'
import styles from './service.module.css'

export default function Service (){
    return (
        <>
        
        <div className= {styles.container}>
            <Image src = {'./laptops.jpg'} alt = 'Service Image' width = {100} height = {100}/>
            
        </div>

        </>
    )
}