import ComingSoon from "../components/comingSoon";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroMarket from "../components/heroMarket";
import TopPromo from "../components/topPromo";

export default function Cart(){
    return(
        <>
        
        <TopPromo/>
        <Header/>
        <HeroMarket page="Your Cart"/>
        <ComingSoon/>
        <Footer/>
        </>
    )
}