import Image from 'next/image'
import styles from './productCard.module.css'
import { MdShoppingCartCheckout } from 'react-icons/md'
import Link from 'next/link';

interface Props {
    image: string;
    title: string;
    price: number;
    category: string;
    slug: string
}

export default function ProductCard ({image, title, price, category, slug}: Props){
    return(
        <>
            <div className= {styles.container}>
        <Link href={`/product/${slug}`}>

                <div className= {styles.imageWrapper}>
                    <Image src={image} alt='id' fill />
                    <div className= {styles.cart}><MdShoppingCartCheckout/></div>
                </div>

                <div className= {styles.body}>
                    <p className= {styles.category}> {category} </p>
                    <div>
                        <p className= {styles.title}> {title}</p>
                        <p className= {styles.price}> ₦ {price.toLocaleString()}</p>
                    </div>
                </div>

                <button className= {styles.button}>Purchase</button>
        </Link>

            </div>
        </>
    )
}