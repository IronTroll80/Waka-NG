import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroMarket from "../components/heroMarket";
import Newsletter from "../components/newsletter";
import OurDetails from "../components/ourDetails";
import TopPromo from "../components/topPromo";

export default function ContactUs (){
    return(
        <>
        <TopPromo/>
        <Header/>
        <HeroMarket/>
        <OurDetails/>
        <ContactForm/>
        <Newsletter/>
        <Footer/>
        </>
    )
}