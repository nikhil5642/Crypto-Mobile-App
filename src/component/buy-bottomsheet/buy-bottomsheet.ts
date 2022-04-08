import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './buy-bottomsheet.command'
import {init} from './buy-bottomsheet.init'
import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'
import {update} from './buy-bottomsheet.update'
import {BuyBottomSheetView} from './buy-bottomsheet.view'

export const buyBottomSheet: Component<
  BuyBottomSheetInterface,
  BuyBottomSheetParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: BuyBottomSheetView,
})
