import Toast from 'react-native-simple-toast'

import {matchR} from '@action-land/tarz'

import {BucketDetailsInterface} from './bucket-details.interface'

export const update = matchR<BucketDetailsInterface>({
  mount: (params, state) => {
    return {
      ...state,
      bucketId: params.bucketId,
      userId: params.userId,
    }
  },
  bucketDetailsResponse: (response, state) => {
    return {
      ...state,
      data: response,
      portfolioData: PieData(response.portfolio),
    }
  },
  investInBucket: (_, state) => {
    Toast.show('Investing will start soon')
    return state
  },
})

const PieData = (portfolio: any) => {
  const values: any[] = []
  portfolio?.forEach((item) => {
    values.push({
      x: item.name,
      y: item.contribution,
    })
  })
  return {title: 'PortFolio', values: values}
}
