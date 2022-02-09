import {matchC} from '@action-land/tarz'

import {PopScreenAction} from '../../helper/navigation-helper'

import {BottomNavigationInterface} from './bottom-navigation.interface'

export const command = matchC<BottomNavigationInterface>({})
