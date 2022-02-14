import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {Routes} from '../../navigator/navigator.interface'

import {PushScreenAction} from './../../helper/navigation-helper'
import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'

export const command = matchC<TickerDetailsInterface>({
  mount: (params: TickerDetailsParams) => {
    return HTTPRequest({
      endpoint: '/market/tickerDetails',
      method: 'POST',
      responseType: 'tickerDetailsResponse',
      variables: {
        tickerId: params.tickerId,
      },
    })
  },

  buyTicker: (_, state) => {
    return PushScreenAction({
      route: Routes.BuySellScreen,
      params: {
        userId: state.userId,
        toCurrency: state.tickerId,
        fromCurrency: 'INR',
        actionType: 'buy',
      },
    })
  },

  sellTicker: (_, state) => {
    return PushScreenAction({
      route: Routes.BuySellScreen,
      params: {
        userId: state.userId,
        toCurrency: 'INR',
        fromCurrency: state.tickerId,
        actionType: 'sell',
      },
    })
  },
})
