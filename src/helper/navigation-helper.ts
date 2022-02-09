import React from 'react'

import {NavigationContainerRef, StackActions} from '@react-navigation/native'

import {Action} from '@action-land/core'

import {NavigationParams} from '../navigator/navigator.interface'

export const navigationRef = React.createRef<NavigationContainerRef>()

export const PushScreenAction = (params: NavigationParams) => {
  navigationRef.current?.dispatch(
    StackActions.push(params.route, params.params),
  )
  return Action.nil()
}

export const ReplaceScreenAction = (params: NavigationParams) => {
  navigationRef.current?.dispatch(
    StackActions.replace(params.route, params.params),
  )
  return Action.nil()
}

export const PopScreenAction = () => {
  if (navigationRef.current?.canGoBack() ?? false) {
    navigationRef.current?.goBack()
  }
  return Action.nil()
}

export const PopToTopScreenAction = () => {
  if (navigationRef.current?.canGoBack() ?? false) {
    navigationRef.current?.dispatch(StackActions.popToTop())
  }
  return Action.nil()
}
