import {BalanceInterface} from '../Balance/balance'
import {CurrencyItem} from '../currency-change/currency-change'

export interface PortFolioInterface {
  userId: string
  totalPortfolioValue: number
  portfolio: PortFolioItem[]
  recentTransactions: RecentTransaction[]
  accountBalance: BalanceInterface
  refreshing: boolean
}

export type PortFolioParams = {
  userId: string
  baseCurrency: CurrencyItem
}

export interface PortFolioItem {
  name: string
  id: string
  price: number
  quantity: number
}

export interface RecentTransaction {
  transactionActionType: string
  transactionId: string
  fromCurrency: string
  toCurrency: string
  fromAmount: number
  toAmount: number
}
