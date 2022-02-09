import {Action} from '@action-land/core'
import * as R from 'ramda'

import {findAction} from './find-action'

export const findActionR = findAction(R.identity)
export const findActionC = findAction(Action.nil)
