import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'

import {Routes} from '../../../navigator/navigator.interface'

import {HTTPQuery, HTTPRequest} from './../../../helper/http-helper'
import {ReplaceScreenAction} from './../../../helper/navigation-helper'
import {LoginScreenInterface} from './login-screen.interface'

export const command = matchC<LoginScreenInterface>({
  submitLogin: (action) => {
    return HTTPRequest({
      endpoint: '/auth/login',
      method: 'POST',
      responseType: 'loginResponse',
      variables: {
        mobileNumber: action.mobNum,
      },
    })
  },
  loginResponse: (res) => {
    return HTTPRequest({
      endpoint: '/auth/userId',
      method: 'POST',
      responseType: 'userIdResponse',
      variables: {
        auth: res.Authorisation,
      },
    })
  },

  userIdResponse: (response) => {
    return ReplaceScreenAction({
      route: Routes.Home,
      params: {
        userId: response.userID.toString(),
      },
    })
  },
})
