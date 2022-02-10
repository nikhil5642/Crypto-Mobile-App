import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './screener.command'
import {init} from './screener.init'
import {ScreenerInterface, ScreenerParams} from './screener.interface'
import {update} from './screener.update'
import {ScreenerView} from './screener.view'

export const screener: Component<ScreenerInterface, ScreenerParams> = R.compose(
  forward({}),
)({
  init: init,
  update: update,
  command: command,
  view: ScreenerView,
})
