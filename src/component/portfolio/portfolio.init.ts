import {PortFolioInterface} from './portfolio.interface'

export const init = (): PortFolioInterface => ({
  userId: '',
  portfolio: [],
  recentTransactions: [],
})
