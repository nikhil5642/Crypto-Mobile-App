import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'

import {Navigator} from './navigator.interface'

export const command = matchC<Navigator>({
  networkRequestFailed: (_) => {
    console.log('Network Failed', _)
    return Action.nil()
  },
})
