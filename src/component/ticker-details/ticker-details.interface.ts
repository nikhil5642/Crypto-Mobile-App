export interface TickerDetailsInterface {
  name: string
  userId: string
  tickerId: string
  data: []
}

export type TickerDetailsParams = {
  userId: string
  tickerId: string
}
