import {BuyBottomSheetInterface} from './buy-bottomsheet.interface'

export const init = (): BuyBottomSheetInterface => ({
  userId: '',
  fundID: '',
  amount: 0,
  amountText: '',
  availableBalance: 0,
})
