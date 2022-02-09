import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './home.command'
import {init} from './home.init'
import {HomeParams, HomeInterface} from './home.interface'
import {update} from './home.update'
import {view} from './home.view'

export const home: Component<HomeInterface, HomeParams> = R.compose(
  forward({}),
)({
  init: init,
  update: update,
  command: command,
  view: view,
})
