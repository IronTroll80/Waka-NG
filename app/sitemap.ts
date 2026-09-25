import type { MetadataRoute } from 'next'
import { getProducts } from './lib/products'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wakang.co'

const baseRoutes = [
  '/',
  '/shop',
  '/about',
  '/contact',
  '/services',
  '/categories',
  '/payment-guidelines',
  '/privacy',
  '/terms-and-conditions',
] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = baseRoutes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))

  try {
    const products = await getProducts()

    for (const product of products) {
      if (!product?.slug) continue

      entries.push({
        url: new URL(`/shop/${product.slug}`, SITE_URL).toString(),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  } catch {
    // Fallback to static sitemap if products are unavailable during build or deployment.
  }

  return entries
}
