import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'

import {BucketDetailsInterface} from './bucket-details.interface'

export const command = matchC<BucketDetailsInterface>({
  mount: (params) => {
    return HTTPRequest({
      endpoint: '/ideas/bucketDetails',
      method: 'POST',
      responseType: 'bucketDetailsResponse',
      variables: {
        userId: params.userId,
        bucketId: params.bucketId,
      },
    })
  },
})
