import {matchR} from '@action-land/tarz'

import {TickerDetailsInterface} from './ticker-details.interface'

export const update = matchR<TickerDetailsInterface>({})
