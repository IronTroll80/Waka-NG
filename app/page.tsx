import Image from "next/image";
import Header from "./components/header";
import ServicesModal from "./components/servicesModal";
import Hero from "./components/hero";
import Categories from "./components/categories";
import Popular from "./components/popular";
import BudgetPicks from "./components/budgetPicks";
import Logistics from "./components/logistics";
import MusicAd from "./components/musicAd";
import FAQ from "./components/faqs";
import Footer from "./components/footer";
import { getProducts } from "./lib/products";

export default async function Home() {

  const products = await getProducts()

  return (
    <>
    
    <Header products={products}/>
    <ServicesModal />
    <Hero />
    <Categories />
    <Popular products = {products}/>
    <Logistics />
    <BudgetPicks products={products} />
    <MusicAd />
    <FAQ />
    <Footer />
    </>
  );
}
