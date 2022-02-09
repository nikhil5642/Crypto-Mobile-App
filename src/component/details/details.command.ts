import {matchC} from '@action-land/tarz'

import {PopScreenAction, PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {DetailsInterface} from './details.interface'

export const command = matchC<DetailsInterface>({
  openHome: () => PushScreenAction({route: Routes.Home, params: {extra: 'ab'}}),
  back: () => PopScreenAction(),
})
