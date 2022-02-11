import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './portfolio.command'
import {init} from './portfolio.init'
import {PortFolioInterface, PortFolioParams} from './portfolio.interface'
import {update} from './portfolio.update'
import {PortFolioView} from './portfolio.view'

export const portfolio: Component<
  PortFolioInterface,
  PortFolioParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: PortFolioView,
})
