import {BalanceInterface} from '../Balance/balance'

import {InvestmentBucketItem} from './investment-buckets'

export interface InvestmentIdeasInterface {
  userId: string
  refreshing: boolean
  accountBalance: BalanceInterface
  causeInvestment: InvestmentIdea[]
  buckets: InvestmentBucketItem[]
}

export type InvestmentIdeasParams = {userId: string; onboarding: boolean}

export interface InvestmentIdea {
  name: string
  id: string
  description: string
  imgUrl: string
}
