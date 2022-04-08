import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PopScreenAction, PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'

export const command = matchC<BuyBottomSheetInterface>({
  load: concatC((params: BuyBottomSheetParams) => {
    return HTTPRequest({
      endpoint: '/portfolio/getRemainingAmount',
      method: 'POST',
      responseType: 'accountBalanceResponse',
      variables: {
        userId: params.userId,
      },
    })
  }),

  buyFund: (_, state) => {
    return HTTPRequest({
      endpoint: '/ideas/buyFund',
      method: 'POST',
      responseType: 'buyFundResponse',
      variables: {
        userId: state.userId,
        amount: state.amount,
        fundID: state.fundID,
      },
    })
  },

  buyFundResponse: concatC((response) => {
    console.log(response)
    return PushScreenAction({
      route: Routes.TransactionStatusScreen,
      params: {
        status: response.success ? 'success' : 'failure',
        message: response.msg,
        transactionId: response.transactionId,
      },
    })
  }),
})
