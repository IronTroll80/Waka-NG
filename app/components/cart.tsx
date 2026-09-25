import {Xmark} from 'iconoir-react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useCart} from '../context/CartContext'
import { getProductImage } from '../lib/products'

interface CartProps {
    onClose: () => void
}

export default function Cart({onClose}: CartProps){

    const {cart, updateQty, removeFromCart} = useCart()

    const totalItems = cart.reduce((total, item) => total + item.qty, 0)

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    )

    console.log(cart)


    return (
        <>

        <div className={styles.cartContainer}>
            <div className={styles.cart}>

                <div className={styles.head}>
                    <h3>Your Cart</h3>
                    <Xmark onClick={onClose} />
                </div>

                <div className={styles.cartList}>
                    {cart.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <p>
                                Looks like your cart is empty! Take a look at our shop to find exactly what you need
                            </p>

                            <button type="button" onClick={onClose}>
                                <Link href="/shop">
                                    CONTINUE SHOPPING
                                </Link>
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div
                                className={styles.cartItem}
                                key={item.id}
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={getProductImage(item.slug)}
                                        alt={item.name}
                                        fill
                                        sizes="72px"
                                    />
                                </div>

                                <div className={styles.details}>
                                    <div className={styles.nameNumber}>
                                        <h4><Link href={`/shop/${item.slug}`}>{item.name}</Link></h4>

                                        <div className={styles.quantityControls}>
                                            <button
                                                type="button"
                                                onClick={() => updateQty(item, 'minus')}
                                            >
                                                -
                                            </button>

                                            <span>{item.qty}</span>

                                            <button
                                                type="button"
                                                onClick={() => updateQty(item, 'add')}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className={styles.priceDelete}>
                                        <h4>
                                            ₦{(item.price * item.qty).toLocaleString()}
                                        </h4>

                                        <button
                                            type="button"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.total}>
                    <div>
                        <p>TOTAL</p>

                        <span>
                            ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                        </span>

                        <h4>
                            ₦{totalPrice.toLocaleString()}
                        </h4>
                    </div>
                    <Link
                            href={`https://wa.me/2348133896617?text=${encodeURIComponent(
                                `Hi Waka NG, I would like to purchase the products: ${cart.map((item)=>(
                                        item.name + ', Quantity: ' + item.qty + ' at ₦' + item.price +' each. '))}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <button type="button">
                            
                            Order Via Whatsapp
                        </button>
                    </Link>


                    <h5>
                        <span>Waka NG</span> utilizes direct payments because of product availability may change frequently
                    </h5>
                </div>

            </div>
        </div>

        </>
    )
}