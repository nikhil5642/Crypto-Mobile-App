import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './investment-ideas.command'
import {init} from './investment-ideas.init'
import {
  InvestmentIdeasInterface,
  InvestmentIdeasParams,
} from './investment-ideas.interface'
import {update} from './investment-ideas.update'
import {InvestmentIdeasView} from './investment-ideas.view'

export const investmentIdeas: Component<
  InvestmentIdeasInterface,
  InvestmentIdeasParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: InvestmentIdeasView,
})
