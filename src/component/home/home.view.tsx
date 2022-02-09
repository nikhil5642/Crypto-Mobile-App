import React, {FC} from 'react'

import {Pressable, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import {AccountBalance} from '../Balance/balance.view'
import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {BottomNavigationOptions} from '../bottom-navigation/bottom-navigation.interface'
import {PortFolio} from '../portfolio/portfolio.view'
import {Screener} from '../screener/screener.view'

import {HomeInterface, HomeParams} from './home.interface'

export const view: FC<Props<HomeInterface, HomeParams>> = ({e, m}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AccountBalance />
      {m.bottomNavigation.selection === BottomNavigationOptions.Market ? (
        <Screener />
      ) : null}

      {m.bottomNavigation.selection === BottomNavigationOptions.PortFolio ? (
        <PortFolio />
      ) : null}

      <bottomNavigation.view
        e={e.of('bottomNavigation')}
        p={{}}
        m={m.bottomNavigation}
      />
    </SafeAreaView>
  )
}
