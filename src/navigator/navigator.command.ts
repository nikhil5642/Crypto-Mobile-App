import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../helper/http-helper'

import {Navigator} from './navigator.interface'

export const command = matchC<Navigator>({
  networkRequestFailed: (_) => {
    console.log('Network Failed', _)
    return Action.nil()
  },
  loadDefaultCurrencyData: (currency) => {
    return HTTPRequest({
      endpoint: '/fiatExchange/fiatCurrentRate',
      method: 'POST',
      responseType: 'currenCurrencyDataResponse',
      variables: {
        id: currency ?? 'usdt',
      },
    })
  },
})
