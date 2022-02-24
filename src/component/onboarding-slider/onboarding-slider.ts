import DefaultPreference from 'react-native-default-preference'

import {matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'
import {PopScreenAction} from '../../helper/navigation-helper'

import {OnBoardingSliderView} from './onboarding-slider.view'

export const onBoardingSlider: Component<
  OnBoardingSliderInterface,
  OnBoardingSliderParams
> = R.compose(forward({}))({
  init: (): OnBoardingSliderInterface => ({
    pageNo: 0,
    endReached: false,
    listViewRef: null,
  }),
  update: matchR<OnBoardingSliderInterface>({
    setListViewRef: (ref, state) => {
      return {...state, listViewRef: ref}
    },
    pageChanged: (num, state) => {
      return {...state, pageNo: num}
    },
    endReached: (_, state) => {
      return {...state, endReached: true}
    },
    completed: (_, state) => {
      DefaultPreference.set('onBoardingSlider', 'done')
      return state
    },
  }),
  command: matchC<OnBoardingSliderInterface>({
    completed: PopScreenAction,
  }),
  view: OnBoardingSliderView,
})

export interface OnBoardingSliderInterface {
  pageNo: number
  endReached: boolean
  listViewRef: any
}

export type OnBoardingSliderParams = Record<string, any>
