import FAQ from "../components/faqs";
import Footer from "../components/footer";
import Header from "../components/header";
import { getProducts } from "../lib/products";
import CTA from "./components/cta";
import Directions from "./components/directions";
import Hero from "./components/hero";
import Story from "./components/story";

export default async function About (){

    const products = await getProducts()

    return (
        <>
        
        <Header products = {products} />
        <Hero />
        <Story />
        <Directions />
        <FAQ />
        <CTA />
        <Footer />
        
        </>
    )
}