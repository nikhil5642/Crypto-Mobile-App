import {InvestmentIdeasInterface} from './investment-ideas.interface'

export const init = (): InvestmentIdeasInterface => ({
  userId: '',
  refreshing: false,
  onBoarding: true,
  onBoardingType: 'category',
  causeInvestment: [],
  buckets: [],
})
