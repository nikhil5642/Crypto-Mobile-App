import {matchR} from '@action-land/tarz'

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
    res.forEach((item) => {
      data.push({
        name: item.name,
        id: item.id,
        imgUrl: item.titleImg,
      })
    })
    return {...state, causeInvestment: data, refreshing: false}
  },
  onRefresh: (_, state) => {
    return {...state, refreshing: true}
  },
})
