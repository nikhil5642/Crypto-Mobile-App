import {matchR} from '@action-land/tarz'

import {ScreenerInterface, ScreenerParams, Ticker} from './screener.interface'

export const update = matchR<ScreenerInterface>({
  mount: (param, state) => {
    return {...state, userId: param.userId, tickers: param.tickers}
  },
  onRefresh: (_, state) => {
    return {...state, refreshing: true}
  },
  liveTickerDataResponse: (response, state) => {
    const data: Ticker[] = []
    response.result.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        price: item.price,
        change: item.change,
      })
    })
    return {...state, data: data, refreshing: false}
  },
})
