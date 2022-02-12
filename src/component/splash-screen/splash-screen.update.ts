import {matchR} from '@action-land/tarz'

import {isHTTPRequestSuccess} from '../../helper/http-helper'

import {SplashScreenInterface} from './splash-screen.interface'

export const update = matchR<SplashScreenInterface>({
  mount: (_auth, state) => {
    return {...state, auth: _auth}
  },
})
