import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'

import {PortFolioInterface, PortFolioParams} from './portfolio.interface'

export const command = matchC<PortFolioInterface>({
  mount: (params: PortFolioParams) => {
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
})
