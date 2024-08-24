import { http, HttpResponse } from 'msw'

import { DeliveredOrderParamsProps } from '../delivered-order'

export const deliveredOrderMock = http.patch<
  DeliveredOrderParamsProps,
  never,
  never
>('/orders/:orderId/delivered', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})
