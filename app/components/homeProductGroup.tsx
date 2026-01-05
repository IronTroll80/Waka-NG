import styles from './homeProductGroup.module.css'
import ProductCard from './productCard'

export default function HomeProductGroup(){
    return(
        <>
        
        <div className= {styles.container}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        
        </>
    )
}