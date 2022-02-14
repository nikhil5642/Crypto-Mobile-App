import {PortFolioInterface} from '../portfolio/portfolio.interface'

import {BalanceInterface} from './../Balance/balance'
import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'
import {ScreenerInterface} from './../screener/screener.interface'

export interface HomeInterface {
  bottomNavigation: BottomNavigationInterface
  screener: ScreenerInterface
  portfolio: PortFolioInterface
  accountBalance: BalanceInterface
}

export type HomeParams = {
  userId: string
}
