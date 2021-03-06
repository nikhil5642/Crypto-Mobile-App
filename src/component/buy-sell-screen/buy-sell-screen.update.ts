import {matchR} from '@action-land/tarz'

import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'

export const update = matchR<BuySellInterface>({
  mount: (params: BuySellParams, state) => {
    return {
      ...state,
      userId: params.userId,
      toCurrency: params.toCurrency,
      fromCurrency: params.fromCurrency,
      actionType: params.actionType,
      amount: params.onBoarding ? 100 : 0,
      amountText: params.onBoarding ? '100' : '',
      availableBalance: 0,
      onBoarding: params.onBoarding,
    }
  },
  onAmountChanged: (amount, state) => {
    return {...state, amountText: amount, amount: parseFloat(amount)}
  },

  submitExchange: (_, state) => {
    return {...state}
  },
  accountBalanceResponse: (response, state) => {
    return {...state, availableBalance: response}
  },
})
