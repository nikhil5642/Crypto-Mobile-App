import * as R from 'ramda'

import {bucketDetails} from '../component/bucket-details/bucket-details'
import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'
import {tickerDetails} from '../component/ticker-details/ticker-details'
import {transactionStatus} from '../component/transaction-status/transaction-status'
import {Component} from '../core/component'
import {forward} from '../core/forward'

import {buySellScreen} from './../component/buy-sell-screen/buy-sell-screen'
import {categoryDetails} from './../component/category-details/category-details'
import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {onBoardingSlider} from './../component/onboarding-slider/onboarding-slider'
import {command} from './navigator.command'
import {init} from './navigator.init'
import {Navigator, NavigationParams} from './navigator.interface'
import {update} from './navigator.update'
import {view} from './navigator.view'

export const navigator: Component<Navigator, NavigationParams> = R.compose(
  forward({
    home,
    tickerDetails,
    splashScreen,
    loginScreen,
    buySellScreen,
    transactionStatus,
    categoryDetails,
    bucketDetails,
    onBoardingSlider,
  }),
)({
  init: init,
  update: update,
  command: command,
  view: view,
})
