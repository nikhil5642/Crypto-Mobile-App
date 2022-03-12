export interface BuySellInterface {
  userId: string
  actionType: 'buy' | 'sell'
  toCurrency: string
  fromCurrency: string
  amount: number
  amountText: string
  availableBalance: number
}

export type BuySellParams = {
  userId: string
  actionType: 'buy' | 'sell'
  toCurrency: string
  fromCurrency: string
  onBoarding: boolean
}
