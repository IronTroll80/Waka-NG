import styles from './bentoCategories.module.css'

export default function BentoCategories (){
    return(
        <>
        
        <div className={styles.container}>
            <div className={`${styles.card} ${styles.phones}`}>
                <div className={styles.overlay}><h3>PHONES</h3></div>
            </div>

            <div className={`${styles.card} ${styles.headphones}`}>
                <div className={styles.overlay}><h3>HEADPHONES</h3></div>
            </div>

            <div className={`${styles.card} ${styles.accessories}`}>
                <div className={styles.overlay}><h3>ACCESSORIES</h3></div>
            </div>

            <div className={`${styles.card} ${styles.music}`}>
                <div className={styles.overlay}><h3>MUSIC EQUIPMENT</h3></div>
            </div>

            <div className={`${styles.card} ${styles.laptops}`}>
                <div className={styles.overlay}><h3>LAPTOPS</h3></div>
            </div>

            <div className={`${styles.card} ${styles.tablets}`}>
                <div className={styles.overlay}><h3>TABLETS</h3></div>
            </div>
        </div>


        </>
    )
}