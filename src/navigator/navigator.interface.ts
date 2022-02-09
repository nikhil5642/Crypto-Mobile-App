import {
  DetailsInterface,
  DetailsParams,
} from '../component/details/details.interface'
import {HomeInterface, HomeParams} from '../component/home/home.interface'
import {
  SplashScreenInterface,
  SplashScreenParams,
} from '../component/splash-screen/splash-screen.interface'

import {
  LoginScreenInterface,
  LoginScreenParams,
} from './../component/login-flows/login-screen/login-screen.interface'

export enum Routes {
  Home = 'Home',
  Details = 'Details',
  SplashScreen = 'SplashScreen',
  LoginScreen = 'LoginScreen',
}

export interface NavigationBase<R extends Routes, P> {
  route: R
  params: P
}

export type NavigationParams =
  | NavigationBase<Routes.Home, HomeParams>
  | NavigationBase<Routes.Details, DetailsParams>
  | NavigationBase<Routes.SplashScreen, SplashScreenParams>
  | NavigationBase<Routes.LoginScreen, LoginScreenParams>

export interface Navigator {
  home: HomeInterface
  details: DetailsInterface
  splashScreen: SplashScreenInterface
  loginScreen: LoginScreenInterface
}
