import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './bottom-navigation.command'
import {init} from './bottom-navigation.init'
import {
  BottomNavigationInterface,
  BottomNavigationParams,
} from './bottom-navigation.interface'
import {update} from './bottom-navigation.update'
import {BottomNavigationView} from './bottom-navigation.view'

export const bottomNavigation: Component<
  BottomNavigationInterface,
  BottomNavigationParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: BottomNavigationView,
})
