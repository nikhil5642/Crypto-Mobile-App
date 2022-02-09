import {bottomNavigation} from '../bottom-navigation/bottom-navigation'

import {BottomNavigationInterface} from './../bottom-navigation/bottom-navigation.interface'
import {HomeInterface} from './home.interface'

export const init = (): HomeInterface => ({
  userId: 'nikhil',
  bottomNavigation: bottomNavigation.init(),
})
