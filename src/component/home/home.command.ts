import {matchC} from '@action-land/tarz'

import {
  PopToTopScreenAction,
  PushScreenAction,
} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {PopScreenAction} from './../../helper/navigation-helper'
import {HomeInterface} from './home.interface'

export const command = matchC<HomeInterface>({
  openDetails: () =>
    PushScreenAction({route: Routes.Details, params: {extra: 'ab'}}),

  back: () => PopScreenAction(),

  backTop: () => PopToTopScreenAction(),
})
