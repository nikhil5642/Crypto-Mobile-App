import DefaultPreference from 'react-native-default-preference'

import {Action} from '@action-land/core'
import {matchR} from '@action-land/tarz'

import {Navigator} from './navigator.interface'

export const update = matchR<Navigator>({
  currencyChange: (currency, state) => {
    console.log('navigator update', currency, currency instanceof Action)
    if (currency instanceof Action) {
      return state
    } else {
      DefaultPreference.set('defaultCurrency', currency.id)
      return {
        ...state,
        currencyChange: {...state.currencyChange, selection: currency.id},
        home: {
          ...state.home,
          baseCurrency: {
            ...state.home.baseCurrency,
            id: currency.id,
            name: currency.name,
            price: currency.price,
            template: currency.template,
          },
        },
      }
    }
  },
  currenCurrencyDataResponse: (response, state) => {
    return {
      ...state,
      currencyChange: {...state.currencyChange, selection: response.result.id},
      home: {
        ...state.home,
        baseCurrency: {
          ...state.home.baseCurrency,
          id: response.result.id,
          name: response.result.name,
          price: response.result.price,
          template: response.result.template,
        },
      },
    }
  },
})
