import httpClient from '@api/httpClient'
import type { Category } from '@models/products'
import { requestWithMock } from '@tools/common'

const getCategories = async (): Promise<Category[]> => {
  if (process.env.NODE_ENV === 'development') {
    const { MOCK_FOOD_CATEGORIES } = await import('@mocks')
    return requestWithMock(async () => {
      const { data } = await httpClient.get<Category[]>('categories')
      return data ?? []
    }, MOCK_FOOD_CATEGORIES)
  }

  const { data } = await httpClient.get<Category[]>('categories')
  return data ?? []
}

export default {
  getCategories,
}
