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
      amount: 0,
      amountText: '',
      availableBalance: 0,
    }
  },
  onAmountChanged: (amount, state) => {
    return {...state, amountText: amount, amount: parseFloat(amount)}
  },

  accountBalanceResponse: (response, state) => {
    return {...state, availableBalance: response}
  },
})
