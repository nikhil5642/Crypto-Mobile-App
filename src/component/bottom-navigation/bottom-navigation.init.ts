import {
  BottomNavigationInterface,
  BottomNavigationOptions,
} from './bottom-navigation.interface'

export const init = (): BottomNavigationInterface => ({
  selection: BottomNavigationOptions.InvestmentIdeas,
})
