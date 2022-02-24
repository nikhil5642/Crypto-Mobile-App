import React, {FC} from 'react'

import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import {accountBalance} from '../Balance/balance'
import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {BottomNavigationOptions} from '../bottom-navigation/bottom-navigation.interface'
import {investmentIdeas} from '../investment-ideas/investment-ideas'
import {portfolio} from '../portfolio/portfolio'
import {screener} from '../screener/screener'

import {HomeInterface, HomeParams} from './home.interface'

export const HomeView: FC<Props<HomeInterface, HomeParams>> = ({e, m, p}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <accountBalance.view
        e={e.of('accountBalance')}
        p={{userId: p.userId}}
        m={m.accountBalance}
      />
      {m.bottomNavigation.selection ===
      BottomNavigationOptions.InvestmentIdeas ? (
        <investmentIdeas.view
          e={e.of('investmentIdeas')}
          p={{
            userId: p.userId,
            onboarding: p.isOnboarding,
          }}
          m={m.investmentIdeas}
        />
      ) : null}
      {m.bottomNavigation.selection === BottomNavigationOptions.Market ? (
        <screener.view
          e={e.of('screener')}
          p={{
            userId: p.userId,
            onboarding: p.isOnboarding && m.screener.onboarding,
          }}
          m={m.screener}
        />
      ) : null}

      {m.bottomNavigation.selection === BottomNavigationOptions.PortFolio ? (
        <portfolio.view
          e={e.of('portfolio')}
          p={{userId: p.userId}}
          m={m.portfolio}
        />
      ) : null}
      <bottomNavigation.view
        e={e.of('bottomNavigation')}
        p={{}}
        m={m.bottomNavigation}
      />
    </SafeAreaView>
  )
}
