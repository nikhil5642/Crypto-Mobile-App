import {matchR} from '@action-land/tarz'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'

export const update = matchR<BuyBottomSheetInterface>({
  load: (params: BuyBottomSheetParams, state) => {
    console.log(params, state)
    return {
      ...state,
      userId: params.userId,
      fundID: params.fundID,
      availableBalance: 0,
    }
  },
  onAmountChanged: (amount, state) => {
    amount = amount.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    if (amount.length > 0) {
      amount = amount.split('.')
      if (amount.length > 1) {
        amount[1] = amount[1].slice(0, 2)
      }
      amount = amount.join('.')
      return {
        ...state,
        amountText: amount,
        amount: parseFloat(amount),
      }
    }
    return {...state, amountText: '', amount: 0}
  },

  buyFundResponse: (_, state) => {
    return {
      ...state,
      visible: false,
      amount: 0,
      amountText: '',
      availableBalance: 0,
    }
  },
  accountBalanceResponse: (response, state) => {
    return {...state, availableBalance: response}
  },
  dismissBottomSheet: (_, state) => {
    return {...state, visible: false}
  },
})
