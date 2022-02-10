import {matchC} from '@action-land/tarz'

import {PopScreenAction, PushScreenAction} from '../../helper/navigation-helper'

import {TickerDetailsInterface} from './ticker-details.interface'

export const command = matchC<TickerDetailsInterface>({
  back: () => PopScreenAction(),
})
