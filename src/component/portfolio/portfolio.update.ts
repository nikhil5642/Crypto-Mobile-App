import {matchR} from '@action-land/tarz'

import {
  PortFolioInterface,
  PortFolioParams,
  PortFolioItem,
} from './portfolio.interface'

export const update = matchR<PortFolioInterface>({
  mount: (params: PortFolioParams, state) => {
    return {...state, userId: params.userId}
  },

  completePortFolioResponse: (response, state) => {
    console.log('completePortFolioResponse', response)
    const data: PortFolioItem[] = []
    Object.entries(response).map(([_name, _value]) => {
      data.push({name: _name, value: _value as string})
    })
    return {...state, data: data}
  },
})
