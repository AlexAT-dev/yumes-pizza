import type { MetadataRoute } from 'next'
import { getGroupedProducts } from '@/common/api/resources/groupedProducts/actions'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yumes-pizza.pp.ua'

const staticPages = ['', '/about', '/delivery']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const groupedProducts = await getGroupedProducts().catch(() => [])

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  const categoryEntries: MetadataRoute.Sitemap = groupedProducts.map(category => ({
    url: `${SITE_URL}/category/${category.id}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  }))

  const productEntries: MetadataRoute.Sitemap = groupedProducts.flatMap(category =>
    category.products.map(product => ({
      url: `${SITE_URL}/category/${category.id}/${product.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  )

  return [...staticEntries, ...categoryEntries, ...productEntries]
}

