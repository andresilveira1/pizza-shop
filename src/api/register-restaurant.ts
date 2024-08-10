import { api } from '@/lib/axios'

export interface RegisterRestaurantProps {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurantProps) {
  await api.post('/restaurants', { restaurantName, managerName, phone, email })
}
