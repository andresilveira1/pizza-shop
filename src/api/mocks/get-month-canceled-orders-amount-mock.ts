import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponseProps } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponseProps
>('/metrics/month-canceled-orders', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
