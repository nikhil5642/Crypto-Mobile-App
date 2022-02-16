import {matchR} from '@action-land/tarz'

import {
  PortFolioInterface,
  PortFolioParams,
  PortFolioItem,
  RecentTransaction,
} from './portfolio.interface'

export const update = matchR<PortFolioInterface>({
  mount: (params: PortFolioParams, state) => {
    return {...state, userId: params.userId}
  },

  completePortFolioResponse: (response, state) => {
    const data: PortFolioItem[] = []
    Object.entries(response.data)?.map(([_name, _value]) => {
      data.push({name: _name, value: _value as string})
    })
    return {
      ...state,
      portfolio: data,
      totalPortfolioValue: response.totalPortfolioValue,
    }
  },

  recentTransactionsResponse: (response, state) => {
    const data: RecentTransaction[] = []
    response.data?.map((item) => {
      data.push({
        transactionActionType: item.actionType,
        transactionId: item.transactionId,
        fromCurrency: item.fromCurrency,
        toCurrency: item.toCurrency,
        fromAmount: item.from,
        toAmount: item.to,
      })
    })
    return {...state, recentTransactions: data.reverse()}
  },
})
