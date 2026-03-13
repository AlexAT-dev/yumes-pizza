import httpClient from '@api/httpClient'
import type { GroupedProducts } from '@models/products'
import { requestWithMock } from '@tools/common'

export const getGroupedProducts = async (): Promise<GroupedProducts[]> => {
  if (process.env.NODE_ENV === 'development') {
    const { MOCK_PRODUCT_WITH_CATEGORIES } = await import('@mocks')
    return requestWithMock(async () => {
      // endpoint returning categories with `products` array
      const { data } = await httpClient.get<GroupedProducts[]>('products/grouped')
      return data ?? []
    }, MOCK_PRODUCT_WITH_CATEGORIES)
  }

  const { data } = await httpClient.get<GroupedProducts[]>('products/grouped')
  return data ?? []
}
