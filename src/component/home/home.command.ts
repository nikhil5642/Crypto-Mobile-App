import {matchC} from '@action-land/tarz'

import {Routes} from '../../navigator/navigator.interface'

import {PushScreenAction} from './../../helper/navigation-helper'
import {HomeInterface} from './home.interface'

export const command = matchC<HomeInterface>({
  changeCurrency: (_) => {
    return PushScreenAction({
      route: Routes.CurrencyChangeScreen,
      params: {},
    })
  },
})
