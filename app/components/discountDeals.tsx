import Image from 'next/image'
import styles from './discountDeals.module.css'

export default function DiscountDeals(){
    return (
        <>
        
        <div className= {styles.container}>
            <div className= {styles.timer}>
                <div className= {styles.timeItem}>
                    <div>
                        4
                    </div>
                    <p>Days</p>
                </div>
                <div className= {styles.timeItem}>
                    <div>
                        05
                    </div>
                    <p>Hours</p>
                </div>
                <div className= {styles.timeItem}>
                    <div>
                        31
                    </div>
                    <p>Minutes</p>
                </div>
                <div className= {styles.timeItem}>
                    <div>
                        53
                    </div>
                    <p>Seconds</p>
                </div>
            </div>
            <div className= {styles.discountImage}>
                
            </div>
            <div className= {styles.imageNav}>
                <div className= {styles.imageCircle}></div>
                <div className= {styles.imageCircle}></div>
                <div className= {styles.imageCircle}></div>
                <div className= {styles.imageCircle}></div>
            </div>
        </div>
        
        </>
    )
}