import {matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'
import {HTTPRequest} from '../../helper/http-helper'

import {PopScreenAction} from './../../helper/navigation-helper'
import {CurrencyChangeView} from './currency-change.view'

export interface CurrencyChangeInteface {
  fiatList: CurrencyItem[]
  selection: string
}

export type CurrencyChangeParams = Record<string, unknown>
export type CurrencyItem = {
  name: string
  id: string
  price: number
  template: string
}

export const CurrencyItemInit = (): CurrencyItem => ({
  name: '',
  id: '',
  price: 0,
  template: '',
})

export const currencyChange: Component<
  CurrencyChangeInteface,
  CurrencyChangeParams
> = R.compose(forward({}))({
  init: (): CurrencyChangeInteface => ({
    fiatList: [],
    selection: 'usdt',
  }),
  update: matchR<CurrencyChangeInteface>({
    fiatListResponse: (response, state) => {
      const data: CurrencyItem[] = []
      response?.result?.map((item) =>
        data.push({
          name: item.name,
          id: item.id,
          price: item.price,
          template: item.template,
        }),
      )
      return {...state, fiatList: data}
    },
  }),
  command: matchC<CurrencyChangeInteface>({
    mount: () => {
      return HTTPRequest({
        endpoint: '/fiatExchange/fiatList',
        method: 'GET',
        responseType: 'fiatListResponse',
      })
    },
    close: PopScreenAction,
  }),
  view: CurrencyChangeView,
})
