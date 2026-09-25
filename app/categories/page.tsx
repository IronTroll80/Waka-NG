import Footer from "../components/footer";
import Header from "../components/header";
import { getProducts } from "../lib/products";
import CategoryList from "./components/categoryList";

export default async function Categories (){

    const products = await getProducts()

    return (
        <>
        
        <Header products = {products} />
        <CategoryList />
        <Footer />
        
        </>
    )
}