import React, {FC} from 'react'

import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import {accountBalance} from '../Balance/balance'
import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {BottomNavigationOptions} from '../bottom-navigation/bottom-navigation.interface'
import Lifecycle from '../lifecycle'
import {PortFolio} from '../portfolio/portfolio.view'
import {screener} from '../screener/screener'

import {HomeInterface, HomeParams} from './home.interface'

export const view: FC<Props<HomeInterface, HomeParams>> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={{flex: 1}}>
        <accountBalance.view
          e={e.of('accountBalance')}
          p={{userId: p.userId}}
          m={m.accountBalance}
        />
        {m.bottomNavigation.selection === BottomNavigationOptions.Market ? (
          <screener.view
            e={e.of('screener')}
            p={{userId: p.userId}}
            m={m.screener}
          />
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
    </Lifecycle>
  )
}
