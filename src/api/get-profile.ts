import { api } from '@/lib/axios'

interface GetProfileProps {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: Date
}

export async function getProfile() {
  const response = await api.get<GetProfileProps>('/me')

  return response.data
}
