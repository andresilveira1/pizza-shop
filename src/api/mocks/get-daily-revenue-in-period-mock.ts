import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponseProps } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponseProps
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '17/08/2024', revenue: 2000 },
    { date: '18/08/2024', revenue: 800 },
    { date: '19/08/2024', revenue: 8000 },
    { date: '20/08/2024', revenue: 540 },
    { date: '21/08/2024', revenue: 400 },
    { date: '22/08/2024', revenue: 700 },
    { date: '23/08/2024', revenue: 1000 },
  ])
})
