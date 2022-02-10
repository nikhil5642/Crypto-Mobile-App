import {Action} from '@action-land/core'
import {matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'
import {HTTPRequest} from '../../helper/http-helper'

import {AccountBalanceView} from './balance.view'

export interface BalanceInterface {
  balance: string
}

export type BalanceParams = {
  userId: string
}

export const accountBalance: Component<
  BalanceInterface,
  BalanceParams
> = R.compose(forward({}))({
  init: (): BalanceInterface => ({
    balance: '0',
  }),
  update: matchR<BalanceInterface>({
    accountBalanceResponse: (response, state) => {
      return {...state, balance: response.Credits}
    },
  }),
  command: matchC<BalanceInterface>({
    mount: (params: BalanceParams) => {
      return HTTPRequest({
        endpoint: '/portfolio/getRemainingCredits',
        method: 'POST',
        responseType: 'accountBalanceResponse',
        variables: {
          userId: params.userId,
        },
      })
    },
  }),
  view: AccountBalanceView,
})
