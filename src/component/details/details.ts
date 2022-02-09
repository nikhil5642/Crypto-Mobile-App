import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './details.command'
import {init} from './details.init'
import {DetailsInterface, DetailsParams} from './details.interface'
import {update} from './details.update'
import {view} from './details.view'

export const details: Component<DetailsInterface, DetailsParams> = R.compose(
  forward({}),
)({
  init: init,
  update: update,
  command: command,
  view: view,
})
