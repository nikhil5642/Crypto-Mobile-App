import {Action} from '@action-land/core'
import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PopScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {PushScreenAction} from './../../helper/navigation-helper'
import {BucketDetailsInterface} from './bucket-details.interface'

export const command = matchC<BucketDetailsInterface>({
  mount: concatC(
    (params) => {
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
    (params) => {
      return HTTPRequest({
        endpoint: '/market/chartData',
        method: 'POST',
        responseType: 'chartDataResponse',
        variables: {
          id: params.bucketId,
        },
      })
    },
  ),

  back: PopScreenAction,
})
