import Header from "./components/header";
import TopPromo from "./components/topPromo";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BentoCategories from "./components/bentoCategories";
import TitleArea from "./components/titleArea";
import HomeProductGroup from "./components/homeProductGroup";
import ServicesTab from "./components/servicesTab";
import DiscountDeals from "./components/discountDeals";
import Newsletter from "./components/newsletter";
import Brands from "./components/brands";
import Whatsapp from "./components/whatsapp";
import FinServices from "./components/finServices";

export default function Home() {
  return (
    <>
    <TopPromo/>
      <Header/>
      <Whatsapp/>
      <Hero/>
      <TitleArea title="Our Top Categories" subtitle="Check Out Our Top Selling Categories"/>
      <BentoCategories/>
      <TitleArea title="Best Selling Items" subtitle="Our Bestsellers in the Last Month"/>
      <HomeProductGroup/>
      <TitleArea title="Our Services" subtitle="Some Services we offer"/>
      <ServicesTab/>
      <TitleArea title="New Arrival Deals" subtitle="Latest Promo Offers"/>
      <DiscountDeals/>
      <FinServices/>
      <Newsletter/>
      <Brands/>
      <Footer/>
    </>
  );
}
