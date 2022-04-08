import {matchR} from '@action-land/tarz'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'

export const update = matchR<BuyBottomSheetInterface>({
  mount: (params: BuyBottomSheetParams, state) => {
    return {
      ...state,
      userId: params.userId,
      fundID: params.fundID,
      availableBalance: 0,
    }
  },
  onAmountChanged: (amount, state) => {
    return {...state, amountText: amount, amount: parseFloat(amount)}
  },

  submitExchange: (_, state) => {
    return {...state}
  },
  accountBalanceResponse: (response, state) => {
    return {...state, availableBalance: response}
  },
})
