import {FC} from 'react'

import {Smitten} from '@action-land/smitten'
import {CommandFunction, ReducerFunction} from '@action-land/tarz'

export interface Props<S, P> {
  e: Smitten
  m: S
  p: P
}

export type View<State, Params> = FC<Props<State, Params>>

export interface Component<
  State = Record<string, unknown>,
  Params = Record<string, unknown>,
  Args extends any[] = any[]
> {
  init: (...t: Args) => State
  update: ReducerFunction<State>
  command: CommandFunction<State>
  view: View<State, Params>
}
