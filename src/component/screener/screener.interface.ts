export interface ScreenerInterface {
  data: Ticker[]
}

export type ScreenerParams = Record<string, any>

export interface Ticker {
  name: string
  id: string
  price: string
}
