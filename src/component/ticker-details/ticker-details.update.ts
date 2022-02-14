import {matchR} from '@action-land/tarz'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'

export const update = matchR<TickerDetailsInterface>({
  mount: (params, state) => {
    return {
      ...state,
      tickerId: params.tickerId,
      userId: params.userId,
    }
  },
  tickerDetailsResponse: (response, state) => {
    return {...state, data: response.result}
  },
})
