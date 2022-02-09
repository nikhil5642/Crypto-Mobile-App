import * as R from 'ramda'

import {details} from '../component/details/details'
import {home} from '../component/home/home'
import {splashScreen} from '../component/splash-screen/splash-screen'
import {Component} from '../core/component'
import {forward} from '../core/forward'

import {loginScreen} from './../component/login-flows/login-screen/login-screen'
import {command} from './navigator.command'
import {init} from './navigator.init'
import {Navigator, NavigationParams} from './navigator.interface'
import {update} from './navigator.update'
import {view} from './navigator.view'

export const navigator: Component<Navigator, NavigationParams> = R.compose(
  forward({home, details, splashScreen, loginScreen}),
)({
  init: init,
  update: update,
  command: command,
  view: view,
})
