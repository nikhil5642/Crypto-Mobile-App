import {matchR} from '@action-land/tarz'

import {getImageURL} from '../../helper/http-helper'

import {InvestmentBucketItem} from './../investment-ideas/investment-buckets'
import {CategoryDetailsInterface} from './category-details.interface'

export const update = matchR<CategoryDetailsInterface>({
  mount: (params, state) => {
    return {
      ...state,
      categoryId: params.categoryId,
      userId: params.userId,
    }
  },
  categoryDetailsResponse: (response, state) => {
    const imgUrls: string[] = []
    response.images?.map((item) => imgUrls.push(getImageURL(item)))

    const buckets: InvestmentBucketItem[] = []
    response?.buckets?.forEach((item) => {
      buckets.push({
        name: item.name,
        category: item.category,
        description: item.short_desc,
        return_one_yr: item.return_one_yr,
        unitPrice: item.unitPrice,
        minAmount: item.minAmount,
        riskLevel: item.riskLevel,
        id: item.id,
        imgUrl: item.titleImg,
      })
    })
    return {
      ...state,
      data: response,
      imageUrls: imgUrls,
      name: response.name,
      buckets: buckets,
    }
  },
})
