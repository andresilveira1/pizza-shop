import { api } from '@/lib/axios'

export interface GetManagedRestaurantProps {
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantProps>(
    '/managed-restaurant',
  )

  return response.data
}
