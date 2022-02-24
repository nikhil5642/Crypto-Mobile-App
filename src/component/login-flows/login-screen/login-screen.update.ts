import DefaultPreference from 'react-native-default-preference'
import Toast from 'react-native-simple-toast'

import {matchR} from '@action-land/tarz'

import {LoginScreenInterface} from './login-screen.interface'

export const update = matchR<LoginScreenInterface>({
  sendOTP: (_, state) => {
    return {...state, showLoader: true}
  },
  sendOTPResponse: (res, state) => {
    if (res.success === true)
      return {
        ...state,
        sessionId: res.sessionId,
        screen: 'otp',
        showLoader: false,
        timer: 29,
      }
    else Toast.show('Invalid Mobile no.', Toast.LONG)
    return {...state, showLoader: false}
  },
  updateTimer: (_, state) => {
    return {...state, timer: state.timer > 0 ? state.timer - 1 : 0}
  },
  verifyOTP: (_, state) => {
    return {...state, showLoader: true}
  },
  verifyOTPResponse: (res, state) => {
    if (res.success === true) {
      DefaultPreference.set('auth', res.Authorisation)
      return {...state, onBoarding: res.newUser, showLoader: false}
    } else Toast.show('Wrong OTP entered', Toast.LONG)
    return {...state, showLoader: false}
  },
  updateMobileNumber: (num, state) => {
    return {...state, mobileNumber: num.replace(/[^0-9]/g, '')}
  },
  otpChanged: (otp, state) => {
    return {...state, otp: otp}
  },
})
