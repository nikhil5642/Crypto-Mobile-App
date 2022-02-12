import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {ReplaceScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'

export const command = matchC<BuySellInterface>({
  mount: concatC((params: BuySellParams) => {
    return HTTPRequest({
      endpoint: '/portfolio/getRemainingAmount',
      method: 'POST',
      responseType: 'accountBalanceResponse',
      variables: {
        userId: params.userId,
        currency: 'INR',
      },
    })
  }),

  userIdResponse: (response) => {
    return ReplaceScreenAction({
      route: Routes.Home,
      params: {
        userId: response.userID.toString(),
      },
    })
  },
})
