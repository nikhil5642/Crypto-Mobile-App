import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'

import {PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {HomeInterface} from './home.interface'

export const command = matchC<HomeInterface>({})
