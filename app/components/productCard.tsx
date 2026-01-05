import Image from 'next/image'
import styles from './productCard.module.css'

export default function ProductCard (){
    return(
        <>
        
        <div className= {styles.container}>

            <div className= {styles.imageWrapper}>
                <Image src={'/alienware.jpg'} alt='id' fill />
            </div>

            <div className= {styles.body}>
                <p className= {styles.category}> Laptops </p>
                <div>
                    <p className= {styles.title}> Alienware 17 R2</p>
                    <p className= {styles.price}> N1,560,000.00</p>
                </div>
            </div>

            <button className= {styles.button}>Add To Cart</button>
            <div className= {styles.hotTag}>HOT</div>
        </div>

        </>
    )
}