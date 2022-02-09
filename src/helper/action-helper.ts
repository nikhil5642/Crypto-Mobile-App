import {Action} from '@action-land/core'
import {Smitten} from '@action-land/smitten'

import {Nil} from '@action-land/core/src/action'

import {flattenActions} from '../core/flatten-actions'
import {reduceAction} from '../core/reduce-action'

import {HTTP_QUERY, HTTPQuery, HTTPParams} from './http-helper'

export function processNewAction(e: Smitten, newAction: Action<unknown>) {
  flattenActions(newAction).forEach((input) => {
    runAction(input, (_) => (Action.isNil(_) ? void 0 : e.emit(_)))
  })
}
function runAction(
  newAction: Action<any>,
  onSuccess: <T>(a: Action<T>) => void,
) {
  const path = reduceAction<Array<string | number>>(
    (acc, val) => [...acc, val.type],
    [],
    newAction,
  )
  const address = path.slice(0, -1)
  const reversed = [...address].reverse()
  const tailAction = reduceAction<Action<unknown> | Nil>(
    (_1, _2) => _2,
    Action.nil(),
    newAction,
  )

  const returnAction = getAction(tailAction)
  if (returnAction instanceof Promise) {
    returnAction
      .then((out: Action<any>) =>
        reversed.reduce((acc, val) => Action.of(val, acc), out),
      )
      .then(onSuccess)
  } else {
    onSuccess(returnAction)
  }
}

function getAction(
  action: Action<any>,
): Action<any, string> | Promise<Action<any>> {
  switch (action.type) {
    case HTTP_QUERY:
      return HTTPQuery(action.value as HTTPParams<any>)
    default:
      return Action.nil()
  }
}
