export interface ScreenerInterface {
  userId: string
  data: Ticker[]
}

export type ScreenerParams = {userId: string}

export interface Ticker {
  name: string
  id: string
  price: string
}
