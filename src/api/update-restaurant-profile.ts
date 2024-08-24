import { api } from '@/lib/axios'

export interface UpdateRestaurantProfileProps {
  name: string
  description: string | null
}

export async function updateRestaurantProfile({
  name,
  description,
}: UpdateRestaurantProfileProps) {
  await api.put('/update-restaurant-profile', { name, description })
}
