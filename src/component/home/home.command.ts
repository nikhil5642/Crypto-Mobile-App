import {matchC} from '@action-land/tarz'

import {HomeInterface} from './home.interface'

export const command = matchC<HomeInterface>({})
