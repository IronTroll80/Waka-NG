import Image from "next/image";
import Header from "./components/header";
import TopPromo from "./components/topPromo";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BentoCategories from "./components/bentoCategories";
import HeroMarket from "./components/heroMarket";
import ProductCard from "./components/productCard";
import TitleArea from "./components/titleArea";
import HomeProductGroup from "./components/homeProductGroup";
import ServicesTab from "./components/servicesTab";
import DiscountDeals from "./components/discountDeals";
import Newsletter from "./components/newsletter";
import Brands from "./components/brands";

export default function Home() {
  return (
    <>
    <TopPromo/>
      <Header/>
      <Hero/>
      <TitleArea title="Our Top Categories" subtitle="Lorem Ipsum dolor sit amet consecteur"/>
      <BentoCategories/>
      <TitleArea title="Best Selling Items" subtitle="Lorem Ipsum dolor sit amet consecteur"/>
      <HomeProductGroup/>
      <TitleArea title="Our Services" subtitle="Lorem Ipsum dolor sit amet consecteur adipiscing elit"/>
      <ServicesTab/>
      <TitleArea title="New Arrival Deals" subtitle="Lorem Ipsum dolor sit amet consecteur adipiscing elit"/>
      <DiscountDeals/>
      <Newsletter/>
      <Brands/>
      <Footer/>
    </>
  );
}
