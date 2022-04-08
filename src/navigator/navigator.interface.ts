import {BuyBottomSheetParams} from '../component/buy-bottomsheet/buy-bottomsheet.interface'
import {HomeInterface, HomeParams} from '../component/home/home.interface'
import {
  SplashScreenInterface,
  SplashScreenParams,
} from '../component/splash-screen/splash-screen.interface'
import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from '../component/ticker-details/ticker-details.interface'
import {TransactionStatusParms} from '../component/transaction-status/transaction-status'

import {
  BucketDetailsInterface,
  BucketDetailsParams,
} from './../component/bucket-details/bucket-details.interface'
import {buyBottomSheet} from './../component/buy-bottomsheet/buy-bottomsheet'
import {BuyBottomSheetInterface} from './../component/buy-bottomsheet/buy-bottomsheet.interface'
import {
  BuySellInterface,
  BuySellParams,
} from './../component/buy-sell-screen/buy-sell-screen.interface'
import {
  CategoryDetailsInterface,
  CatergoryDetailsParams,
} from './../component/category-details/category-details.interface'
import {
  LoginScreenInterface,
  LoginScreenParams,
} from './../component/login-flows/login-screen/login-screen.interface'
import {
  OnBoardingSliderInterface,
  OnBoardingSliderParams,
} from './../component/onboarding-slider/onboarding-slider'
import {TransactionStatusInterFace} from './../component/transaction-status/transaction-status'

export enum Routes {
  Home = 'Home',
  TickerDetails = 'TickerDetails',
  SplashScreen = 'SplashScreen',
  LoginScreen = 'LoginScreen',
  BuySellScreen = 'BuySellScreen',
  TransactionStatusScreen = 'TransactionStatusScreen',
  CatergoryDetailsScreen = 'CatergoryDetailsScreen',
  BucketDetailsScreen = 'BucketDetailsScreen',
  OnBoardingSliderScreen = 'OnBoardingSliderScreen',
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
  | NavigationBase<Routes.TransactionStatusScreen, TransactionStatusParms>
  | NavigationBase<Routes.CatergoryDetailsScreen, CatergoryDetailsParams>
  | NavigationBase<Routes.BucketDetailsScreen, BucketDetailsParams>
  | NavigationBase<Routes.OnBoardingSliderScreen, OnBoardingSliderParams>

export interface Navigator {
  home: HomeInterface
  tickerDetails: TickerDetailsInterface
  splashScreen: SplashScreenInterface
  loginScreen: LoginScreenInterface
  buySellScreen: BuySellInterface
  transactionStatusScreen: TransactionStatusInterFace
  categoryDetails: CategoryDetailsInterface
  bucketDetails: BucketDetailsInterface
  onBoardingSlider: OnBoardingSliderInterface
}
