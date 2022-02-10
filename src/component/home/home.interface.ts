import {bottomNavigation} from './../bottom-navigation/bottom-navigation'
import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'
import {ScreenerInterface} from './../screener/screener.interface'

export interface HomeInterface {
  userId: string
  bottomNavigation: BottomNavigationInterface
  screener: ScreenerInterface
}

export type HomeParams = {
  userId: string
}
