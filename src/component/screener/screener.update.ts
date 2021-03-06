import {matchR} from '@action-land/tarz'

import {ScreenerInterface, Ticker} from './screener.interface'

export const update = matchR<ScreenerInterface>({
  mount: (param, state) => {
    return {
      ...state,
      userId: param.params.userId,
      tickers: param.tickers,
    }
  },

  onRefresh: (_, state) => {
    return {...state, refreshing: true}
  },

  liveTickerDataResponse: (response, state) => {
    const data: Ticker[] = []
    response.result?.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        price: item.price,
        change: item.change,
        riskIndex: item.volatility,
      })
    })
    return {...state, data: data, refreshing: false}
  },

  onTickerSelected: (_, state) => {
    return {...state, onboarding: false}
  },
})
