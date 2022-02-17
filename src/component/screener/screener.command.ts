import {matchC} from '@action-land/tarz'

import {Routes} from '../../navigator/navigator.interface'

import {HTTPRequest} from './../../helper/http-helper'
import {PushScreenAction} from './../../helper/navigation-helper'
import {ScreenerInterface, Ticker} from './screener.interface'

export const command = matchC<ScreenerInterface>({
  mount: (param) => {
    return HTTPRequest({
      endpoint: '/market/getTickerLiveData',
      method: 'POST',
      responseType: 'liveTickerDataResponse',
      variables: {
        tickers: param.tickers,
      },
    })
  },
  onRefresh: (_, state) => {
    return HTTPRequest({
      endpoint: '/market/getTickerLiveData',
      method: 'POST',
      responseType: 'liveTickerDataResponse',
      variables: {
        tickers: state.tickers,
      },
    })
  },
  onTickerSelected: (item, state) => {
    return PushScreenAction({
      route: Routes.TickerDetails,
      params: {tickerId: item.id, userId: state.userId},
    })
  },
})
