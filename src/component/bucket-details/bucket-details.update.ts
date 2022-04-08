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

  chartDataResponse: (response, state) => {
    return {...state, chartData: response.result}
  },

  showBottomsheet: (_, state) => {
    return {...state, bottomSheetVisibility: true}
  },

  dismissBottomsheet: (_, state) => {
    return {...state, bottomSheetVisibility: false}
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
