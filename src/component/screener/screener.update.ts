import Toast from 'react-native-simple-toast'

import {matchR} from '@action-land/tarz'

import {ScreenerInterface, Ticker} from './screener.interface'
import {getFeatureTags} from './screener.utils'

export const update = matchR<ScreenerInterface>({
  mount: (param, state) => {
    return {
      ...state,
      userId: param.params.userId,
      tickers: param.tickers,
      onboarding: param.params.onboarding,
    }
  },
  closeTooltip: (_, state) => {
    return {...state, onboarding: false}
  },
  onRefresh: (_, state) => {
    return {...state, refreshing: true}
  },
  tagClicked: (name, state) => {
    Toast.show(name, Toast.LONG)
    return state
  },
  liveTickerDataResponse: (response, state) => {
    const data: Ticker[] = []
    response.result?.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        price: item.price,
        change: item.change,
        riskIndex: item.riskIndex,
        tags: getFeatureTags(item.tags),
      })
    })
    return {...state, data: data, refreshing: false}
  },
  dissmissTooltip: (_, state) => {
    return {...state, onboarding: false}
  },
  onTickerSelected: (_, state) => {
    return {...state, onboarding: false}
  },
})
