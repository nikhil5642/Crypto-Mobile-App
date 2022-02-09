import {matchR} from '@action-land/tarz'

import {HomeInterface} from './home.interface'

export const update = matchR<HomeInterface>({
  test: (_, state) => {
    console.log('update received', state)
    return {...state, name: 'sd;fla'}
  },
})
