export interface ScreenerInterface {
  userId: string
  data: Ticker[]
  tickers: string[]
  refreshing: boolean
  onboarding: boolean
}

export type ScreenerParams = {userId: string; onboarding: boolean}

export interface Ticker {
  name: string
  id: string
  price: string
  change: number
  riskIndex: number
  tags: any[]
}
