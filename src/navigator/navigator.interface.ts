import {HomeInterface, HomeParams} from '../component/home/home.interface'
import {
  SplashScreenInterface,
  SplashScreenParams,
} from '../component/splash-screen/splash-screen.interface'
import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from '../component/ticker-details/ticker-details.interface'

import {
  BuySellInterface,
  BuySellParams,
} from './../component/buy-sell-screen/buy-sell-screen.interface'
import {
  LoginScreenInterface,
  LoginScreenParams,
} from './../component/login-flows/login-screen/login-screen.interface'

export enum Routes {
  Home = 'Home',
  TickerDetails = 'TickerDetails',
  SplashScreen = 'SplashScreen',
  LoginScreen = 'LoginScreen',
  BuySellScreen = 'BuySellScreen',
}

export interface NavigationBase<R extends Routes, P> {
  route: R
  params: P
}

export type NavigationParams =
  | NavigationBase<Routes.Home, HomeParams>
  | NavigationBase<Routes.TickerDetails, TickerDetailsParams>
  | NavigationBase<Routes.SplashScreen, SplashScreenParams>
  | NavigationBase<Routes.LoginScreen, LoginScreenParams>
  | NavigationBase<Routes.BuySellScreen, BuySellParams>

export interface Navigator {
  home: HomeInterface
  tickerDetails: TickerDetailsInterface
  splashScreen: SplashScreenInterface
  loginScreen: LoginScreenInterface
  buySellScreen: BuySellInterface
}
