import {ReducerFunction} from '@action-land/tarz'
import * as R from 'ramda'

export const forwardS = R.curry(
  <S, T>(
    prop: string,
    reducer: ReducerFunction<T, S>,
    value: S,
    state: Record<string, T>,
  ) => R.assoc(prop, reducer(value, state[prop]), state),
)
