import {accountBalance} from '../Balance/balance'
import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {screener} from '../screener/screener'

import {portfolio} from './../portfolio/portfolio'
import {HomeInterface} from './home.interface'

export const init = (): HomeInterface => ({
  userId: '',
  bottomNavigation: bottomNavigation.init(),
  screener: screener.init(),
  portfolio: portfolio.init(),
  accountBalance: accountBalance.init(),
})
