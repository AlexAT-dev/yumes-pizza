import httpClient from '@api/httpClient'
import type { GroupedProducts } from '@models/products'

export const getGroupedProducts = async (): Promise<GroupedProducts[]> => {
  const { data } = await httpClient.get<GroupedProducts[]>('grouped-products/grouped')
  return data ?? []
}
