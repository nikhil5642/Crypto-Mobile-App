import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './ticker-details.command'
import {init} from './ticker-details.init'
import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'
import {update} from './ticker-details.update'
import {view} from './ticker-details.view'

export const tickerDetails: Component<
  TickerDetailsInterface,
  TickerDetailsParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: view,
})
