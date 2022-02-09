import {details} from '../component/details/details'
import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'

import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {Navigator} from './navigator.interface'

export const init = (): Navigator => ({
  home: home.init(),
  details: details.init(),
  splashScreen: splashScreen.init(),
  loginScreen: loginScreen.init(),
})
