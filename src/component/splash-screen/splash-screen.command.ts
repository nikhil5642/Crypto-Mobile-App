import {matchC} from '@action-land/tarz'

import {ReplaceScreenAction} from '../../helper/navigation-helper'

import {HTTPRequest} from './../../helper/http-helper'
import {Routes} from './../../navigator/navigator.interface'
import {SplashScreenInterface} from './splash-screen.interface'

export const command = matchC<SplashScreenInterface>({
  mount: (auth) => {
    if (auth) {
      return HTTPRequest({
        endpoint: '/auth/verify',
        method: 'POST',
        responseType: 'verifyAuthResponse',
        variables: {auth: auth},
      })
    } else
      return ReplaceScreenAction({
        route: Routes.LoginScreen,
        params: {},
      })
  },

  verifyAuthResponse: (res, state) => {
    if (res.success) {
      return HTTPRequest({
        endpoint: '/auth/userId',
        method: 'POST',
        responseType: 'userIdResponse',
        variables: {
          auth: state.auth,
        },
      })
    } else
      return ReplaceScreenAction({
        route: Routes.LoginScreen,
        params: {},
      })
  },
  userIdResponse: (response) => {
    return ReplaceScreenAction({
      route: Routes.Home,
      params: {
        userId: response.userID.toString(),
        isOnboarding: false,
      },
    })
  },
})
