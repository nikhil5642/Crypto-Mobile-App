import {matchR} from '@action-land/tarz'

import {HomeInterface, HomeParams} from './home.interface'

export const update = matchR<HomeInterface>({
  mount: (params: HomeParams, state) => {
    return {...state, userId: params.userId}
  },
})
