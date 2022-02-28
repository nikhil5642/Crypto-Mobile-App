import {InvestmentIdeasInterface} from './investment-ideas.interface'

export const init = (): InvestmentIdeasInterface => ({
  userId: '',
  refreshing: false,
  causeInvestment: [],
  buckets: [],
})
