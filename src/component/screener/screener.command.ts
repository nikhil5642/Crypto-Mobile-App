import {matchC} from '@action-land/tarz'

import {Routes} from '../../navigator/navigator.interface'

import {HTTPRequest} from './../../helper/http-helper'
import {PushScreenAction} from './../../helper/navigation-helper'
import {ScreenerInterface, Ticker} from './screener.interface'

export const command = matchC<ScreenerInterface>({
  mount: (tickers: Array<string>) => {
    return HTTPRequest({
      endpoint: '/market/getTickerLiveData',
      method: 'POST',
      responseType: 'liveTickerDataResponse',
      variables: {
        tickers: tickers,
      },
    })
  },
  onTickerSelected: (item: Ticker, state) => {
    return PushScreenAction({
      route: Routes.TickerDetails,
      params: {tickerId: item.id, userId: state.userId},
    })
  },
})
