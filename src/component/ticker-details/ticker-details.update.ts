import {matchR} from '@action-land/tarz'

import {TickerDetailsInterface} from './ticker-details.interface'

export const update = matchR<TickerDetailsInterface>({
  mount: (params, state) => {
    return {
      ...state,
      tickerId: params.tickerId,
      userId: params.userId,
      onBoarding: params.onBoarding,
    }
  },
  tickerDetailsResponse: (response, state) => {
    return {...state, data: response.result}
  },

  buyTicker: (_, state) => {
    return {...state, onBoarding: false}
  },
})
