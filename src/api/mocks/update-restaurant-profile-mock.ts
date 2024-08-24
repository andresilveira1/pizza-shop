import { http, HttpResponse } from 'msw'

import { UpdateRestaurantProfileProps } from '../update-restaurant-profile'

export const updateRestaurantProfileMock = http.put<
  never,
  UpdateRestaurantProfileProps
>('/update-restaurant-profile', async ({ request }) => {
  const { name } = await request.json()

  if (name === 'Rocket Pizza') {
    return new HttpResponse(null, { status: 204 })
  }

  return new HttpResponse(null, { status: 400 })
})
