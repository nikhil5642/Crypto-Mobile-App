import {InvestmentBucketItem} from './../investment-ideas/investment-buckets'

export interface CategoryDetailsInterface {
  name: string
  userId: string
  categoryId: string
  data: any
  imageUrls: string[]
  buckets: InvestmentBucketItem[]
}

export type CatergoryDetailsParams = {
  userId: string
  categoryId: string
}
