import {BuyBottomSheetInterface} from './../buy-bottomsheet/buy-bottomsheet.interface'

export interface BucketDetailsInterface {
  userId: string
  bucketId: string
  data: any
  portfolioData: any
  chartData: any
  buyBottomSheet: BuyBottomSheetInterface
}

export type BucketDetailsParams = {
  userId: string
  bucketId: string
}
