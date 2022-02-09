import {
  Action,
  action as compactAction,
  isAction,
  isList,
  isNil,
} from '@action-land/core'
import * as R from 'ramda'

export const flattenActions = (action: Action<any>): Array<Action<any>> => {
  const _ = action as any
  if (isNil(_)) {
    return []
  }
  if (isList(_)) {
    return R.chain(flattenActions, _.value)
  }
  if (!isAction(_.value)) {
    return [_]
  }
  return flattenActions(_.value).map(compactAction(_.type))
}
