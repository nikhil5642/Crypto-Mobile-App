import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'

export const command = matchC<TickerDetailsInterface>({
  mount: (params: TickerDetailsParams) => {
    return HTTPRequest({
      endpoint: '/market/tickerDetails',
      method: 'POST',
      responseType: 'tickerDetailsResponse',
      variables: {
        tickerId: params.tickerId,
      },
    })
  },
})
