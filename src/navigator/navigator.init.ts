import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'

import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {tickerDetails} from './../component/ticker-details/ticker-details'
import {Navigator} from './navigator.interface'

export const init = (): Navigator => ({
  home: home.init(),
  tickerDetails: tickerDetails.init(),
  splashScreen: splashScreen.init(),
  loginScreen: loginScreen.init(),
})
