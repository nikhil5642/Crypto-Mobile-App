import {matchR} from '@action-land/tarz'

import {isHTTPRequestSuccess} from '../../helper/http-helper'

import {SplashScreenInterface} from './splash-screen.interface'

export const update = matchR<SplashScreenInterface>({
  mount: (_auth, state) => {
    return {...state, auth: _auth}
  },
  response: (response, state) => {
    if (isHTTPRequestSuccess(response)) {
      console.log('response received', response)
    }
    return state
  },
  test: (_, state) => {
    console.log('update received', state)
    return {...state, name: 'sd;fla'}
  },
})
