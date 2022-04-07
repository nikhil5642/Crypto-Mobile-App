import {accountBalance} from '../Balance/balance'

import {PortFolioInterface} from './portfolio.interface'

export const init = (): PortFolioInterface => ({
  userId: '',
  portfolio: [],
  totalPortfolioValue: 0,
  recentTransactions: [],
  refreshing: false,
  accountBalance: accountBalance.init(),
})
