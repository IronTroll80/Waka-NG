import styles from './heroMarket.module.css'

interface Props {
    page: string;
}

export default function HeroMarket({page}:Props){
    return(
        <>
            <div className= {styles.container}>
                <div className= {styles.overlay}>
                    <p>Home / {page}</p>
                    <h3>{page}</h3>
                </div>
            </div>
        </>
    )
}