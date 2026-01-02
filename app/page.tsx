import Image from "next/image";
import Header from "./components/header";
import TopPromo from "./components/topPromo";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BentoCategories from "./components/bentoCategories";
import HeroMarket from "./components/heroMarket";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <>
    <TopPromo/>
      <Header/>
      {/* <Hero/> */}
      <HeroMarket/>
      <ProductCard/>
      <Footer/>
    </>
  );
}
