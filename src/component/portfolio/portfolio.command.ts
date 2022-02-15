import {concatC, matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'

import {PortFolioInterface, PortFolioParams} from './portfolio.interface'

export const command = matchC<PortFolioInterface>({
  mount: concatC(
    (params: PortFolioParams) => {
      return HTTPRequest({
        endpoint: '/portfolio/getCompletePortFolio',
        method: 'POST',
        responseType: 'completePortFolioResponse',
        variables: {
          userId: params.userId,
          currency: 'INR',
        },
      })
    },
    (params: PortFolioParams) => {
      return HTTPRequest({
        endpoint: '/portfolio/getRecentTransactions',
        method: 'POST',
        responseType: 'recentTransactionsResponse',
        variables: {
          userId: params.userId,
          currency: 'INR',
        },
      })
    },
  ),
})
