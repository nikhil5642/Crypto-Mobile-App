import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'

import {BucketDetailsInterface} from './bucket-details.interface'

export const command = matchC<BucketDetailsInterface>({
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
