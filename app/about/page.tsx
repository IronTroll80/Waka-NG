import styles from './product.module.css'
import Header from "../components/header";
import TopPromo from "../components/topPromo";
import Footer from "../components/footer";
import HeroMarket from "../components/heroMarket";
import About from '../components/about';
import Brands from '../components/brands';
import OurDetails from '../components/ourDetails';

export default function Product(){
    return(
        <>
        
            <TopPromo/>
            <Header/>
            <HeroMarket page='About Us'/>
            <About/>
            <Brands/>
            <OurDetails/>
            <Footer/>

        </>
    )
}