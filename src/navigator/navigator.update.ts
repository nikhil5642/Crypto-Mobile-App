import {matchR} from '@action-land/tarz'

import {Navigator} from './navigator.interface'

export const update = matchR<Navigator>({
  test: (_, state) => {
    console.log('update received', state)
    return state
  },
})
