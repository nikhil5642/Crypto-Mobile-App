import {matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'
import {HTTPRequest} from '../../helper/http-helper'
import {CurrencyItem} from '../currency-change/currency-change'

import {AccountBalanceView} from './balance.view'

export interface BalanceInterface {
  balance: number
}

export type BalanceParams = {
  userId: string
  baseCurrency: CurrencyItem
}

export const accountBalance: Component<
  BalanceInterface,
  BalanceParams
> = R.compose(forward({}))({
  init: (): BalanceInterface => ({
    balance: 0,
  }),
  update: matchR<BalanceInterface>({
    accountBalanceResponse: (response, state) => {
      return {...state, balance: response}
    },
  }),
  command: matchC<BalanceInterface>({
    mount: (params: BalanceParams) => {
      return HTTPRequest({
        endpoint: '/portfolio/getRemainingAmount',
        method: 'POST',
        responseType: 'accountBalanceResponse',
        variables: {
          userId: params.userId,
          currency: 'USDT',
        },
      })
    },
  }),
  view: AccountBalanceView,
})
