import { api } from '@/lib/axios'

export type GetDailyRevenueInPeriodResponseProps = {
  date: string
  revenue: number
}[]

export interface GetDailyRevenueInPeriodQueryProps {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQueryProps) {
  const response = await api.get<GetDailyRevenueInPeriodResponseProps>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
