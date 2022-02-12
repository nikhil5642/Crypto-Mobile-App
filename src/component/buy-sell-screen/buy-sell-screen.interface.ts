export interface BuySellInterface {
  userId: string
  actionType: 'buy' | 'sell'
  toCurrency: string
  fromCurrency: string
  amount: number
  availableBalance: number
}

export type BuySellParams = {
  userId: string
  actionType: 'buy' | 'sell'
  toCurrency: string
  fromCurrency: string
}
