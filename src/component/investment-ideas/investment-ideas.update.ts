import DefaultPreference from 'react-native-default-preference'

import {matchR} from '@action-land/tarz'

import {InvestmentBucketItem} from './investment-buckets'
import {
  InvestmentIdea,
  InvestmentIdeasInterface,
} from './investment-ideas.interface'

export const update = matchR<InvestmentIdeasInterface>({
  mount: (param, state) => {
    return {...state, userId: param.userId}
  },
  causeIdeasResponse: (res, state) => {
    const data: InvestmentIdea[] = []
    res?.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        imgUrl: item.titleImg,
      })
    })
    return {...state, causeInvestment: data, refreshing: false}
  },
  bucketsListResponse: (res, state) => {
    const data: InvestmentBucketItem[] = []
    res?.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        imgUrl: item.titleImg,
      })
    })
    return {...state, buckets: data, refreshing: false}
  },
  investmentIdeasOnboardingLoaded: (val, state) => {
    return {...state, onBoarding: val !== 'done' ?? true}
  },
  onBordingInvestInCategoryContinue: (_, state) => {
    return {...state, onBoardingType: 'buckets'}
  },
  onBordingBucketsDone: (_, state) => {
    DefaultPreference.set('investmentIdeasOnboarding', 'done')
    return {...state, onBoarding: false}
  },
  onRefresh: (_, state) => {
    return {...state, refreshing: true}
  },
})
