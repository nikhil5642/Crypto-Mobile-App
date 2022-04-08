import {buyBottomSheet} from '../buy-bottomsheet/buy-bottomsheet'

import {BucketDetailsInterface} from './bucket-details.interface'

export const init = (): BucketDetailsInterface => ({
  userId: '',
  bucketId: '',
  data: {},
  portfolioData: {},
  chartData: null,
  buyBottomSheet: buyBottomSheet.init(),
})
