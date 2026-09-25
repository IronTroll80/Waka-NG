import {supabase} from './supabase'

export type Product = {
    id: string
    name: string
    description: string
    price: number
    category: string
    slug: string
    specs: string
    notes: string
    categoryName: string
}

export const getProducts = async () => {
    const {data, error} = await supabase
        .from('products')
        .select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data as Product[]
}

export const getProductImage = (slug: string) => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        return '/images/fallback.png'
    }

    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${slug}.png`
}