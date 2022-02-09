import {Action, action as compactAction, List} from '@action-land/core'
import {concatC, concatR, matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from './component'

export type ActionMapper = {
  [name: string]: Array<Array<string>>
}
export type ForwardWithFunction = {
  <T, V>(p: ActionMapper, q: Component<T, V>): Component<T, V>
  <T, V>(p: ActionMapper): {
    (q: Component<T, V>): Component<T, V>
  }
}
export const forwardWith: ForwardWithFunction = R.curry(
  (p: ActionMapper, q: Component): Component => {
    const wrapAction = (arr: Array<Array<string>>, action: Action<any>) =>
      arr.map((i) => R.reverse(i).reduce(R.flip(compactAction), action))
    const update = concatR(
      matchR(
        R.mapObjIndexed(
          (arr: any) => (
            action: Action<unknown>,
            state: Record<string, unknown>,
          ) =>
            wrapAction(arr, action).reduce(
              (wState: Record<string, unknown>, wAction: Action<unknown>) =>
                q.update(wAction, wState),
              state,
            ),
          p,
        ),
      ),
      q.update,
    )
    const command = concatC(
      matchC(
        R.mapObjIndexed(
          (arr: any) => (
            action: Action<unknown>,
            state: Record<string, unknown>,
          ) =>
            List(
              ...wrapAction(arr, action).map((_: Action<unknown>) =>
                q.command(_, state),
              ),
            ),
          p,
        ),
      ),
      q.command,
    )
    return {
      ...q,
      update,
      command,
    }
  },
)
