import {matchC} from '@action-land/tarz'

import {HTTPRequest} from '../../helper/http-helper'
import {PushScreenAction} from '../../helper/navigation-helper'
import {Routes} from '../../navigator/navigator.interface'

import {InvestmentIdeasInterface} from './investment-ideas.interface'

export const command = matchC<InvestmentIdeasInterface>({
  mount: (param) => {
    return HTTPRequest({
      endpoint: '/ideas/causeIdeas',
      method: 'POST',
      responseType: 'causeIdeasResponse',
      variables: {
        userId: param.userId,
      },
    })
  },

  categorySelected: (item, state) => {
    return PushScreenAction({
      route: Routes.CatergoryDetailsScreen,
      params: {categoryId: item.id, userId: state.userId},
    })
  },
})