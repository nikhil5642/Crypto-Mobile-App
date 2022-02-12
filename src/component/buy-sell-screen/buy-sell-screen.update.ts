import {matchR} from '@action-land/tarz'

import {isHTTPRequestSuccess} from '../../helper/http-helper'

import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'

export const update = matchR<BuySellInterface>({
  mount: (params: BuySellParams, state) => {
    return {
      ...state,
      userId: params.userId,
      toCurrency: params.toCurrency,
      fromCurrency: params.fromCurrency,
      actionType: params.actionType,
    }
  },
  onAmountChanged: (amount, state) => {
    console.log('amount', amount)
    return {...state, amount: amount.replace(/[^0-9]/g, '')}
  },

  accountBalanceResponse: (response, state) => {
    return {...state, availableBalance: response}
  },
})
