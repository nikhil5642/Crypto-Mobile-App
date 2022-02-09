import * as R from 'ramda'

import {forward} from '../../../core/forward'

import {Component} from './../../../core/component'
import {command} from './login-screen.command'
import {init} from './login-screen.init'
import {LoginScreenInterface, LoginScreenParams} from './login-screen.interface'
import {update} from './login-screen.update'
import {LoginScreenView} from './login-screen.view'

export const loginScreen: Component<
  LoginScreenInterface,
  LoginScreenParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: LoginScreenView,
})
