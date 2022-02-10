import {matchR} from '@action-land/tarz'

import {ScreenerInterface, Ticker} from './screener.interface'

export const update = matchR<ScreenerInterface>({
  liveTickerDataResponse: (response, state) => {
    const data: Ticker[] = []
    response.result.forEach((item) => {
      data.push({name: item.name, id: item.id, price: item.price})
    })
    return {...state, data: data}
  },
})
