import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MusicAd from "../components/musicAd";
import { getProducts, Product } from "../lib/products";
import ShopContent from "./components/shop";

  const products = await getProducts()


export default function Shop (){
    return (
        <>
        <Suspense fallback = {null}>
            <Header products={products}/>
            <ShopContent products = {products}/>
            <MusicAd />
            <Footer />
        </Suspense>
        
        </>
    )
}