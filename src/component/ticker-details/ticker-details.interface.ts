export interface TickerDetailsInterface {
  name: string
  userId: string
  tickerId: string
  data: []
  onBoarding: boolean
}

export type TickerDetailsParams = {
  userId: string
  tickerId: string
  onBoarding: boolean
}
