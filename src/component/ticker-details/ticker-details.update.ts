import {matchR} from '@action-land/tarz'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'

export const update = matchR<TickerDetailsInterface>({
  mount: (params: TickerDetailsParams, state) => {
    return {
      ...state,
      tickerId: params.tickerId,
      userId: state.userId,
    }
  },
  tickerDetailsResponse: (response, state) => {
    return {...state, data: response.result}
  },
})
