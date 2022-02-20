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
    console.log('Category', response)
    const imgUrls: string[] = []
    response.images?.map((item) => imgUrls.push(getImageURL(item)))

    const buckets: InvestmentBucketItem[] = []
    response?.buckets?.forEach((item) => {
      buckets.push({
        name: item.name,
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
