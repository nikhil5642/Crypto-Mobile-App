import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {screener} from '../screener/screener'

import {HomeInterface} from './home.interface'

export const init = (): HomeInterface => ({
  userId: 'nikhil',
  bottomNavigation: bottomNavigation.init(),
  screener: screener.init(),
})
