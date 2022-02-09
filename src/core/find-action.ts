import {Action} from '@action-land/core'
import * as R from 'ramda'

export const findAction = R.curry(
  <S, T>(
    defaultCase: (s: S) => T,
    path: string,
    reducer: <A, B>(a: A, b: B) => S,
    action: unknown,
    state: S,
  ) => {
    let leaf = action
    while (Action.isAction(leaf) && Action.isAction(leaf.value)) {
      leaf = leaf.value
    }

    return Action.isAction(leaf) && leaf.type === path
      ? reducer(leaf.value, state)
      : defaultCase(state)
  },
)
