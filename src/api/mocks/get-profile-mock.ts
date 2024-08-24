import { http, HttpResponse } from 'msw'

import { GetProfileProps } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileProps>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '987654321',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
