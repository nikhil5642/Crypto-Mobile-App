import {Action, isAction} from '@action-land/core'

export const reduceAction = <T>(
  itar: (acc: T, action: Action<any>, id: number) => T,
  seed: T,
  action: Action<any>,
): T => {
  let i = 0
  let acc = seed
  do {
    acc = itar(acc, action, i++)
    action = action.value
  } while (isAction(action))
  return acc
}
