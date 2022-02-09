import React, {FC} from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {details} from '../component/details/details'
import {DetailsParams} from '../component/details/details.interface'
import {home} from '../component/home/home'
import {HomeParams} from '../component/home/home.interface'
import {loginScreen} from '../component/login-flows/login-screen/login-screen'
import {LoginScreenParams} from '../component/login-flows/login-screen/login-screen.interface'
import {splashScreen} from '../component/splash-screen/splash-screen'
import {SplashScreenParams} from '../component/splash-screen/splash-screen.interface'
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
        mode="modal"
        screenOptions={rootNavigatorScreenOptions}
        headerMode="screen">
        <Stack.Screen name={Routes.Home}>
          {({route}) => (
            <home.view
              e={e.of('home')}
              p={{...(p.params as HomeParams), ...route.params}}
              m={m.home}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name={Routes.Details}>
          {({route}) => (
            <details.view
              e={e.of('details')}
              p={{...(p.params as DetailsParams), ...route.params}}
              m={m.details}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
