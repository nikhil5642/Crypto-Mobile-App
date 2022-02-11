import {matchR} from '@action-land/tarz'

import {ScreenerInterface, ScreenerParams, Ticker} from './screener.interface'

export const update = matchR<ScreenerInterface>({
  updateState: (param: ScreenerParams, state) => {
    return {...state, userId: param.userId}
  },

  liveTickerDataResponse: (response, state) => {
    const data: Ticker[] = []
    response.result.forEach((item) => {
      data.push({name: item.name, id: item.id, price: item.price})
    })
    return {...state, data: data}
  },
})
