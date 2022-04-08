import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PopScreenAction, PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'

export const command = matchC<BuyBottomSheetInterface>({
  mount: concatC((params: BuyBottomSheetParams) => {
    return HTTPRequest({
      endpoint: '/portfolio/getRemainingAmount',
      method: 'POST',
      responseType: 'accountBalanceResponse',
      variables: {
        userId: params.userId,
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
        fundID: state.fundID,
        amount: state.amount,
      },
    })
  },

  exchangeCurrencyResponse: concatC(
    (_) => {
      return PopScreenAction()
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
})
