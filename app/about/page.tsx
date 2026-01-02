import styles from './product.module.css'
import Header from "../components/header";
import TopPromo from "../components/topPromo";
import Footer from "../components/footer";
import HeroMarket from "../components/heroMarket";
import About from '../components/about';

export default function Product(){
    return(
        <>
        
            <TopPromo/>
            <Header/>
            <HeroMarket/>
            <About/>
            <Footer/>

        </>
    )
}