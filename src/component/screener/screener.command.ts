import {matchC} from '@action-land/tarz'

import {HTTPRequest} from './../../helper/http-helper'
import {ScreenerInterface} from './screener.interface'

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
})
