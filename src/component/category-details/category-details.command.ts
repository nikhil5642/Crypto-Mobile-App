import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {CategoryDetailsInterface} from './category-details.interface'

export const command = matchC<CategoryDetailsInterface>({
  mount: (params) => {
    return HTTPRequest({
      endpoint: '/ideas/causeIdeaDetails',
      method: 'POST',
      responseType: 'categoryDetailsResponse',
      variables: {
        userId: params.userId,
        categoryId: params.categoryId,
      },
    })
  },
})
