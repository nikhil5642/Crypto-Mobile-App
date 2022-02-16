import {PortFolioInterface} from './portfolio.interface'

export const init = (): PortFolioInterface => ({
  userId: '',
  portfolio: [],
  totalPortfolioValue: 0,
  recentTransactions: [],
})
