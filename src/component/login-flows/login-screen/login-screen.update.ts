import DefaultPreference from 'react-native-default-preference'

import {matchR} from '@action-land/tarz'

import {LoginScreenInterface} from './login-screen.interface'

export const update = matchR<LoginScreenInterface>({
  loginResponse: (res, state) => {
    state.authorisation = res.Authorisation
    DefaultPreference.set('auth', res.Authorisation)
    return state
  },
})
