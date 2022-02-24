import {Action} from '@action-land/core'
import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PopScreenAction, PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {PopToTopScreenAction} from './../../helper/navigation-helper'
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

  exchangeCurrencyResponse: concatC(
    (_, state) => {
      return state.onBoarding ? PopToTopScreenAction() : PopScreenAction()
    },
    (response) => {
      return PushScreenAction({
        route: Routes.TransactionStatusScreen,
        params: {
          status: response.success ? 'success' : 'failure',
          transactionId: response.success ? response.transactionId : '',
        },
      })
    },
  ),
  dismissTickerDetails: PopToTopScreenAction,
})
