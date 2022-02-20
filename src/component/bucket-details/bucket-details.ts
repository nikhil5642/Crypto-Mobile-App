import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {command} from './bucket-details.command'
import {init} from './bucket-details.init'
import {
  BucketDetailsInterface,
  BucketDetailsParams,
} from './bucket-details.interface'
import {update} from './bucket-details.update'
import {BucketDetailView} from './bucket-details.view'

export const bucketDetails: Component<
  BucketDetailsInterface,
  BucketDetailsParams
> = R.compose(forward({}))({
  init: init,
  update: update,
  command: command,
  view: BucketDetailView,
})
