import {bottomNavigation} from './../bottom-navigation/bottom-navigation'
import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'

export interface HomeInterface {
  userId: string
  bottomNavigation: BottomNavigationInterface
}

export type HomeParams = {
  userId: string
}
