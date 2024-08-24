import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantProps } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantProps
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description.',
    createdAt: new Date(),
    updatedAt: null,
  })
})
