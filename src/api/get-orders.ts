import { api } from '@/lib/axios'

export interface GetOrderProps {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface GetOrdersQueryProps {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQueryProps) {
  const response = await api.get<GetOrderProps>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
