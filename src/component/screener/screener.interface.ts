export interface ScreenerInterface {
  userId: string
  data: Ticker[]
  tickers: string[]
  refreshing: boolean
}

export type ScreenerParams = {userId: string}

export interface Ticker {
  name: string
  id: string
  price: string
  change: number
}
