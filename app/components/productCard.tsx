import Image from 'next/image'
import styles from './productCard.module.css'
import { MdShoppingCartCheckout } from 'react-icons/md'

interface Props {
    image: string;
    title: string;
    price: number;
    category: string;
}

export default function ProductCard ({image, title, price, category}: Props){
    return(
        <>
        
        <div className= {styles.container}>

            <div className= {styles.imageWrapper}>
                <Image src={image} alt='id' fill />
                <div className= {styles.cart}><MdShoppingCartCheckout/></div>
            </div>

            <div className= {styles.body}>
                <p className= {styles.category}> {category} </p>
                <div>
                    <p className= {styles.title}> {title}</p>
                    <p className= {styles.price}> {price.toLocaleString()}</p>
                </div>
            </div>

            <button className= {styles.button}>Purchase</button>
        </div>

        </>
    )
}