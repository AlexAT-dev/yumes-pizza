import httpClient from '@api/httpClient'
import type { CreateOrderResponse, HistoryOrder, Order } from '@models/order'
import type { User } from '@models/user'
import { requestWithMock } from '@tools/common'

export const getOrder = async (userId: User['id']) => {
  if (process.env.NODE_ENV === 'development') {
    const { MOCK_HISTORY_ORDERS } = await import('@mocks')
    return requestWithMock(async () => {
      const { data } = await httpClient.get<HistoryOrder[]>('order', {
        params: { id_client: userId },
      })
      return data
    }, MOCK_HISTORY_ORDERS)
  }

  const { data } = await httpClient.get<HistoryOrder[]>('order', {
    params: { id_client: userId },
  })
  return data
}

export const createOrder = async (order: Order) => {
  if (process.env.NODE_ENV === 'development') {
    const { MOCK_ORDER_ID } = await import('@mocks')
    return requestWithMock(
      async () => {
        const { data } = await httpClient.post<CreateOrderResponse>('order', {
          ...order,
        })

        return data ?? null
      },
      { id: MOCK_ORDER_ID, message: 'Message' },
    )
  }

  const { data } = await httpClient.post<CreateOrderResponse>('order', {
    ...order,
  })
  return data ?? null
}