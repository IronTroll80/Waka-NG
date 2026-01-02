import styles from './heroMarket.module.css'

export default function HeroMarket(){
    return(
        <>
            <div className= {styles.container}>
                <div className= {styles.overlay}>
                    <p>Home / Marketplace</p>
                    <h3>Marketplace</h3>
                </div>
            </div>
        </>
    )
}