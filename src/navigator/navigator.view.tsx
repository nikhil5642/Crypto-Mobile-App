import React, {FC} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {bucketDetails} from '../component/bucket-details/bucket-details'
import {BucketDetailsParams} from '../component/bucket-details/bucket-details.interface'
import {buySellScreen} from '../component/buy-sell-screen/buy-sell-screen'
import {BuySellParams} from '../component/buy-sell-screen/buy-sell-screen.interface'
import {categoryDetails} from '../component/category-details/category-details'
import {CatergoryDetailsParams} from '../component/category-details/category-details.interface'
import {home} from '../component/home/home'
import {HomeParams} from '../component/home/home.interface'
import {loginScreen} from '../component/login-flows/login-screen/login-screen'
import {LoginScreenParams} from '../component/login-flows/login-screen/login-screen.interface'
import {onBoardingSlider} from '../component/onboarding-slider/onboarding-slider'
import {splashScreen} from '../component/splash-screen/splash-screen'
import {SplashScreenParams} from '../component/splash-screen/splash-screen.interface'
import {tickerDetails} from '../component/ticker-details/ticker-details'
import {TickerDetailsParams} from '../component/ticker-details/ticker-details.interface'
import {
  transactionStatus,
  TransactionStatusParms,
} from '../component/transaction-status/transaction-status'
import {Props} from '../core/component'
import {navigationRef} from '../helper/navigation-helper'

import {NavigationParams, Navigator, Routes} from './navigator.interface'

const Stack = createStackNavigator()
const rootNavigatorScreenOptions = {headerShown: false}

export const view: FC<Props<Navigator, NavigationParams>> = ({e, m, p}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={p.route}
        screenOptions={rootNavigatorScreenOptions}>
        <Stack.Screen name={Routes.Home}>
          {({route}) => (
            <home.view
              e={e.of('home')}
              p={{...(p.params as HomeParams), ...route.params}}
              m={m.home}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.TickerDetails}>
          {({route}) => (
            <tickerDetails.view
              e={e.of('tickerDetails')}
              p={{...(p.params as TickerDetailsParams), ...route.params}}
              m={m.tickerDetails}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.SplashScreen}>
          {({route}) => (
            <splashScreen.view
              e={e.of('splashScreen')}
              p={{...(p.params as SplashScreenParams), ...route.params}}
              m={m.splashScreen}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name={Routes.LoginScreen}>
          {({route}) => (
            <loginScreen.view
              e={e.of('loginScreen')}
              p={{...(p.params as LoginScreenParams), ...route.params}}
              m={m.loginScreen}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.BuySellScreen}>
          {({route}) => (
            <buySellScreen.view
              e={e.of('buySellScreen')}
              p={{...(p.params as BuySellParams), ...route.params}}
              m={m.buySellScreen}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name={Routes.TransactionStatusScreen}>
          {({route}) => (
            <transactionStatus.view
              e={e.of('transactionStatus')}
              p={{...(p.params as TransactionStatusParms), ...route.params}}
              m={m.transactionStatusScreen}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name={Routes.CatergoryDetailsScreen}>
          {({route}) => (
            <categoryDetails.view
              e={e.of('categoryDetails')}
              p={{...(p.params as CatergoryDetailsParams), ...route.params}}
              m={m.categoryDetails}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name={Routes.BucketDetailsScreen}>
          {({route}) => (
            <bucketDetails.view
              e={e.of('bucketDetails')}
              p={{...(p.params as BucketDetailsParams), ...route.params}}
              m={m.bucketDetails}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.OnBoardingSliderScreen}>
          {({route}) => (
            <onBoardingSlider.view
              e={e.of('onBoardingSlider')}
              p={{...(p.params as BucketDetailsParams), ...route.params}}
              m={m.onBoardingSlider}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
