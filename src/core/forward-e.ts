import {Action} from '@action-land/core'
import {CommandFunction} from '@action-land/tarz'
import * as R from 'ramda'

export const forwardE = R.curry(
  <S, T, U>(
    prop: string,
    command: CommandFunction<T, S, U>,
    value: S,
    state: Record<string, T>,
  ) => {
    const eff = command(value, state[prop])
    return Action.isNil(eff) ? Action.nil() : Action.of(prop, eff)
  },
)
