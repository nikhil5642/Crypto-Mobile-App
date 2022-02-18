import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './category-details.command'
import {init} from './category-details.init'
import {
  CategoryDetailsInterface,
  CatergoryDetailsParams,
} from './category-details.interface'
import {update} from './category-details.update'
import {CategoryDetailView} from './category-details.view'

export const categoryDetails: Component<
  CategoryDetailsInterface,
  CatergoryDetailsParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: CategoryDetailView,
})
