import * as R from 'ramda'

import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'
import {tickerDetails} from '../component/ticker-details/ticker-details'
import {Component} from '../core/component'
import {forward} from '../core/forward'

import {buySellScreen} from './../component/buy-sell-screen/buy-sell-screen'
import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {command} from './navigator.command'
import {init} from './navigator.init'
import {Navigator, NavigationParams} from './navigator.interface'
import {update} from './navigator.update'
import {view} from './navigator.view'

export const navigator: Component<Navigator, NavigationParams> = R.compose(
  forward({home, tickerDetails, splashScreen, loginScreen, buySellScreen}),
)({
  init: init,
  update: update,
  command: command,
  view: view,
})
