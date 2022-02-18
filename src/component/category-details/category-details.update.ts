import {matchR} from '@action-land/tarz'

import {getImageURL} from '../../helper/http-helper'

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
    return {...state, data: response, imageUrls: imgUrls, name: response.name}
  },
})
