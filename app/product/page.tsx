import styles from './product.module.css'
import Header from "../components/header";
import TopPromo from "../components/topPromo";
import Footer from "../components/footer";
import HeroMarket from "../components/heroMarket";
import ProductDetails from '../components/productDetails';

export default function Product(){
    return(
        <>
        
            <TopPromo/>
            <Header/>
            <HeroMarket/>
            <ProductDetails/>
            <Footer/>

        </>
    )
}