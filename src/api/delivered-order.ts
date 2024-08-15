import { api } from '@/lib/axios'

export interface DeliveredOrderParamsProps {
  orderId: string
}

export async function deliveredOrder({ orderId }: DeliveredOrderParamsProps) {
  await api.patch(`/orders/${orderId}/delivered`)
}
