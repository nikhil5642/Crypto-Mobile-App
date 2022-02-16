export interface PortFolioInterface {
  userId: string
  totalPortfolioValue: number
  portfolio: PortFolioItem[]
  recentTransactions: RecentTransaction[]
}

export type PortFolioParams = {userId: string}

export interface PortFolioItem {
  name: string
  value: string
}

export interface RecentTransaction {
  transactionActionType: string
  transactionId: string
  fromCurrency: string
  toCurrency: string
  fromAmount: number
  toAmount: number
}
