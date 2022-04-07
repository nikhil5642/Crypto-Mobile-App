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
    response.data?.forEach((item) =>
      data.push({
        name: item.name,
        id: item.id,
        price: item.price,
        quantity: item.quantity,
      }),
    )
    return {
      ...state,
      portfolio: data,
      totalPortfolioValue: response.totalInvestedValue,
    }
  },

  recentTransactionsResponse: (response, state) => {
    const data: RecentTransaction[] = []
    response.data?.map((item) => {
      if ('bucket_id' in item) {
        data.push({
          transactionActionType: item.order_type,
          transactionId: item.transactionId,
          fromCurrency: 'USDT',
          toCurrency: item.bucket_id,
          fromAmount: item.amount_usdt,
          toAmount: item.units,
        })
      } else {
        data.push({
          transactionActionType: item.actionType,
          transactionId: item.transactionId,
          fromCurrency: item.fromCurrency,
          toCurrency: item.toCurrency,
          fromAmount: item.from,
          toAmount: item.to,
        })
      }
    })
    return {...state, recentTransactions: data.reverse()}
  },
})
