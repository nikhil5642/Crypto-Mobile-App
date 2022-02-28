import {InvestmentBucketItem} from './investment-buckets'

export interface InvestmentIdeasInterface {
  userId: string
  refreshing: boolean
  onBoarding: boolean
  onBoardingType: 'category' | 'buckets'
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
