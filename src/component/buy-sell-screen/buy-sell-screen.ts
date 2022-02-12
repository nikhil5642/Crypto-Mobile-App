import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './buy-sell-screen.command'
import {init} from './buy-sell-screen.init'
import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'
import {update} from './buy-sell-screen.update'
import {view} from './buy-sell-screen.view'

export const buySellScreen: Component<
  BuySellInterface,
  BuySellParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: view,
})
