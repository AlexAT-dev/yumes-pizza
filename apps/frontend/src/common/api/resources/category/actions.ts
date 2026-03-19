import httpClient from '@api/httpClient'
import type { Category } from '@models/products'

const getCategories = async (): Promise<Category[]> => {
  const { data } = await httpClient.get<Category[]>('categories')
  return data ?? []
}

export default {
  getCategories,
}
