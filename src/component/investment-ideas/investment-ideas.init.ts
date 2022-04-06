import {accountBalance} from '../Balance/balance'

import {InvestmentIdeasInterface} from './investment-ideas.interface'

export const init = (): InvestmentIdeasInterface => ({
  userId: '',
  accountBalance: accountBalance.init(),
  refreshing: false,
  causeInvestment: [],
  buckets: [],
})
