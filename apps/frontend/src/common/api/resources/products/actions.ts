import httpClient from '@api/httpClient'
import type { Product } from '@models/products'

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await httpClient.get<Product[]>('products')
  return data ?? []
}

export const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const { data } = await httpClient.get<Product>(`products/${id}`)
    return data
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export const getProductsByCategory = async (
  categoryId: string,
): Promise<Product[]> => {
  const products = await getProducts()
  return products.filter(product => product.categoryId === categoryId)
}
