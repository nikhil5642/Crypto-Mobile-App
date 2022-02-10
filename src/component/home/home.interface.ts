import {BalanceInterface} from './../Balance/balance'
import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'
import {ScreenerInterface} from './../screener/screener.interface'

export interface HomeInterface {
  userId: string
  bottomNavigation: BottomNavigationInterface
  screener: ScreenerInterface
  accountBalance: BalanceInterface
}

export type HomeParams = {
  userId: string
}
