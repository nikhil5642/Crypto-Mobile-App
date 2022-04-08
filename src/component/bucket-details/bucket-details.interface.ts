export interface BucketDetailsInterface {
  userId: string
  bucketId: string
  data: any
  portfolioData: any
  chartData: any
  bottomSheetVisibility: boolean
}

export type BucketDetailsParams = {
  userId: string
  bucketId: string
}
