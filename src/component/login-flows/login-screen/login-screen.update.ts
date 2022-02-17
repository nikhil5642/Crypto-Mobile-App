import DefaultPreference from 'react-native-default-preference'
import Toast from 'react-native-simple-toast'

import {matchR} from '@action-land/tarz'

import {LoginScreenInterface} from './login-screen.interface'

export const update = matchR<LoginScreenInterface>({
  sendOTPResponse: (res, state) => {
    if (res.success === true)
      return {...state, sessionId: res.sessionId, screen: 'otp'}
    else Toast.show('Enter Valid Mobile no.', Toast.LONG)
    return state
  },

  verifyOTPResponse: (res, state) => {
    if (res.success === true) DefaultPreference.set('auth', res.Authorisation)
    else Toast.show('Something went wrong. Try Again', Toast.LONG)
    return state
  },
  updateMobileNumber: (num, state) => {
    return {...state, mobileNumber: num.replace(/[^0-9]/g, '')}
  },
  otpChanged: (otp, state) => {
    return {...state, otp: otp}
  },
})
