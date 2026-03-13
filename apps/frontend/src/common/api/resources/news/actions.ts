import httpClient from '@api/httpClient'
import type { News } from '@models/news'
import { requestWithMock } from '@tools/common'

export const getNews = async (): Promise<News[]> => {
  if (process.env.NODE_ENV === 'development') {
    const { MOCK_NEWS } = await import('@mocks')
    return requestWithMock(async () => {
      const { data } = await httpClient.get<News[]>('news')
      return data ?? []
    }, MOCK_NEWS)
  }

  const { data } = await httpClient.get<News[]>('news')
  return data ?? []
}
