export interface InvestmentIdeasInterface {
  userId: string
  refreshing: boolean
  causeInvestment: InvestmentIdea[]
}

export type InvestmentIdeasParams = {userId: string}

export interface InvestmentIdea {
  name: string
  id: string
  imgUrl: string
}
