import {InvestmentBucketItem} from './investment-buckets'

export interface InvestmentIdeasInterface {
  userId: string
  refreshing: boolean
  causeInvestment: InvestmentIdea[]
  buckets: InvestmentBucketItem[]
}

export type InvestmentIdeasParams = {userId: string}

export interface InvestmentIdea {
  name: string
  id: string
  imgUrl: string
}
