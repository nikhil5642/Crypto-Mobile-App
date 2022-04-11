import {bottomNavigation} from '../bottom-navigation/bottom-navigation'
import {investmentIdeas} from '../investment-ideas/investment-ideas'
import {screener} from '../screener/screener'

import {CurrencyItemInit} from './../currency-change/currency-change'
import {portfolio} from './../portfolio/portfolio'
import {HomeInterface} from './home.interface'

export const init = (): HomeInterface => ({
  bottomNavigation: bottomNavigation.init(),
  screener: screener.init(),
  investmentIdeas: investmentIdeas.init(),
  portfolio: portfolio.init(),
  baseCurrency: CurrencyItemInit(),
})
