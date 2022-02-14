import {Action} from '@action-land/core'
import {matchC} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from '../../core/component'
import {forward} from '../../core/forward'

import {PopScreenAction} from './../../helper/navigation-helper'
import {TransactionStatusView} from './transaction-status.view'

export interface TransactionStatusInterFace {}

export type TransactionStatusParms = {
  status: 'success' | 'failure'
  transactionId: string
}

export const transactionStatus: Component<
  TransactionStatusInterFace,
  TransactionStatusParms
> = R.compose(forward({}))({
  init: (): TransactionStatusInterFace => ({x: ''}),
  update: (s) => s,
  command: matchC<TransactionStatusInterFace>({
    done: PopScreenAction,
  }),
  view: TransactionStatusView,
})
