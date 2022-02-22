import {BuySellInterface} from './buy-sell-screen.interface'

export const init = (): BuySellInterface => ({
  userId: '',
  actionType: 'buy',
  toCurrency: '',
  fromCurrency: '',
  amount: 0,
  amountText: '',
  availableBalance: 0,
  onBoarding: false,
  tooltipType: 'input',
})
