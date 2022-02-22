import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'

import {Routes} from '../../../navigator/navigator.interface'

import {HTTPRequest} from './../../../helper/http-helper'
import {ReplaceScreenAction} from './../../../helper/navigation-helper'
import {LoginScreenInterface} from './login-screen.interface'

export const command = matchC<LoginScreenInterface>({
  sendOTP: (_, state) => {
    return HTTPRequest({
      endpoint: '/auth/sendOTP',
      method: 'POST',
      responseType: 'sendOTPResponse',
      variables: {
        mobileNumber: state.mobileNumber,
      },
    })
  },

  verifyOTP: (_, state) => {
    return HTTPRequest({
      endpoint: '/auth/verifyOTP',
      method: 'POST',
      responseType: 'verifyOTPResponse',
      variables: {
        mobileNumber: state.mobileNumber,
        otp: state.otp,
        sessionId: state.sessionId,
      },
    })
  },

  verifyOTPResponse: (res) => {
    return res.success === true
      ? HTTPRequest({
          endpoint: '/auth/userId',
          method: 'POST',
          responseType: 'userIdResponse',
          variables: {
            auth: res.Authorisation,
          },
        })
      : Action.nil()
  },

  userIdResponse: (response, state) => {
    return ReplaceScreenAction({
      route: Routes.Home,
      params: {
        userId: response.userID.toString(),
        isOnboarding: state.onBoarding,
      },
    })
  },
})
