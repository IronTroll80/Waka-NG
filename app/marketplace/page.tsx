import { SearchProvider } from '../context/searchContext'
import Header from "../components/header";
import TopPromo from "../components/topPromo";
import Footer from "../components/footer";
import HeroMarket from "../components/heroMarket";
import ProductCard from "../components/productCard";
import Shop from '../components/shop';
import Newsletter from '../components/newsletter';

export default function Marketplace(){

    return(
        <>
        <SearchProvider>
            <TopPromo/>
            <Header/>
            <HeroMarket page='Marketplace'/>
            <Shop/>
            <Newsletter/>
            <Footer/>
        </SearchProvider>
        
        </>
    )
}