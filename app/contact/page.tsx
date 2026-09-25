import Footer from "../components/footer";
import Header from "../components/header";
import { getProducts } from "../lib/products";
import Form from "./components/form";


export default async function Contact (){

    const products = await getProducts()

    return (
        <>
        
        <Header products = {products} />
        <Form />
        <Footer />
                
        </>
    )
}