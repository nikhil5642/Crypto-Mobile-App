import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {ReplaceScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'

export const command = matchC<BuySellInterface>({
  mount: concatC((params: BuySellParams) => {
    return HTTPRequest({
      endpoint: '/portfolio/getRemainingAmount',
      method: 'POST',
      responseType: 'accountBalanceResponse',
      variables: {
        userId: params.userId,
        currency: params.fromCurrency,
      },
    })
  }),

  submitExchange: (_, state) => {
    return HTTPRequest({
      endpoint: '/portfolio/exchangeCurrency',
      method: 'POST',
      responseType: 'exchangeCurrencyResponse',
      variables: {
        userId: state.userId,
        fromCurrency: state.fromCurrency,
        toCurrency: state.toCurrency,
        amount: state.amount,
        actionType: state.actionType,
      },
    })
  },

  exchangeCurrencyResponse: (response) => {
    return ReplaceScreenAction({
      route: Routes.TransactionStatusScreen,
      params: {
        status: response.success ? 'success' : 'failure',
        transactionId: response.success ? response.transactionId : '',
      },
    })
  },
})
