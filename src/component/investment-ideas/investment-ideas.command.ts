import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {InvestmentIdeasInterface} from './investment-ideas.interface'

export const command = matchC<InvestmentIdeasInterface>({
  mount: concatC(
    (param) => {
      return HTTPRequest({
        endpoint: '/ideas/causeIdeas',
        method: 'POST',
        responseType: 'causeIdeasResponse',
        variables: {
          userId: param.userId,
        },
      })
    },
    (param) => {
      return HTTPRequest({
        endpoint: '/ideas/bucketsList',
        method: 'POST',
        responseType: 'bucketsListResponse',
        variables: {
          userId: param.userId,
        },
      })
    },
  ),
  openBucket: (item, state) => {
    return PushScreenAction({
      route: Routes.BucketDetailsScreen,
      params: {bucketId: item, userId: state.userId},
    })
  },
  categorySelected: (item, state) => {
    return PushScreenAction({
      route: Routes.CatergoryDetailsScreen,
      params: {categoryId: item.id, userId: state.userId},
    })
  },
})
