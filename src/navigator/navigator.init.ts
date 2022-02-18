import {buySellScreen} from '../component/buy-sell-screen/buy-sell-screen'
import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'

import {categoryDetails} from './../component/category-details/category-details'
import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {tickerDetails} from './../component/ticker-details/ticker-details'
import {transactionStatus} from './../component/transaction-status/transaction-status'
import {Navigator} from './navigator.interface'

export const init = (): Navigator => ({
  home: home.init(),
  tickerDetails: tickerDetails.init(),
  splashScreen: splashScreen.init(),
  loginScreen: loginScreen.init(),
  buySellScreen: buySellScreen.init(),
  transactionStatusScreen: transactionStatus.init(),
  categoryDetails: categoryDetails.init(),
})
