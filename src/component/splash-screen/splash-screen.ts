import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './splash-screen.command'
import {init} from './splash-screen.init'
import {
  SplashScreenInterface,
  SplashScreenParams,
} from './splash-screen.interface'
import {update} from './splash-screen.update'
import {view} from './splash-screen.view'

export const splashScreen: Component<
  SplashScreenInterface,
  SplashScreenParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: view,
})
