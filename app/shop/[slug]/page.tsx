import ProductDetails from '../components/productDetails'
import {getProducts} from '@/app/lib/products'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({params}: Props) {
    const products = await getProducts()

    return (
        <ProductDetails
            params={params}
            products={products}
        />
    )
}