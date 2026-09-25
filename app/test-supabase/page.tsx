import {getProducts} from '@/app/lib/products'

    export const products = await getProducts()


export default async function TestSupabase() {

    return (
        <pre>
            {JSON.stringify(products, null, 2)}
        </pre>
    )
}