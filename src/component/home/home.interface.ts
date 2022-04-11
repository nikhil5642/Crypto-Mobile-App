import {CurrencyItem} from '../currency-change/currency-change'
import {PortFolioInterface} from '../portfolio/portfolio.interface'

import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'
import {InvestmentIdeasInterface} from './../investment-ideas/investment-ideas.interface'
import {ScreenerInterface} from './../screener/screener.interface'

export interface HomeInterface {
  bottomNavigation: BottomNavigationInterface
  screener: ScreenerInterface
  investmentIdeas: InvestmentIdeasInterface
  portfolio: PortFolioInterface
  baseCurrency: CurrencyItem
}

export type HomeParams = {
  userId: string
  isOnboarding: boolean
}
