import {concatR, matchR} from '@action-land/tarz'
import * as R from 'ramda'

import {Component} from './component'
import {FORWARD_KEY} from './forward'

export type AutoInitParams = {
  skip?: Array<string>
  destroy?: boolean
  skipForwards?: boolean
}

export const AUTO_INIT_KEY = '__autoInit__'

export const autoInit = (p?: AutoInitParams) => <State, Params>(
  c: Component<State, Params>,
): Component<State, Params> => {
  const params: AutoInitParams = R.merge({skip: [], destroy: false}, p)
  const init = (...args: any[]) => ({
    ...c.init(...args),
    [AUTO_INIT_KEY]: {args},
  })

  /**
   * Gets the keys that should be skipped from re-initialization
   * @param state
   * @return state
   */
  const getSkippedKeys = R.compose(
    R.concat(params.skip),
    params.skipForwards ? R.pathOr([], [FORWARD_KEY, 'keys']) : R.always([]),
    R.nthArg(1),
  )

  /**
   * Re-creates the initial state
   * @param state
   * @return state
   */
  const createInitialState = R.compose(
    R.apply(init),
    R.pathOr([], [AUTO_INIT_KEY, 'args']),
    R.nthArg(1),
  )

  /**
   * Reducer that is called on "mount/unmount"
   */
  const resetState = R.converge(R.merge, [
    R.nthArg(1),
    R.converge(R.omit, [getSkippedKeys, createInitialState]),
  ])
  const type = params.destroy ? 'unmount' : 'mount'
  const update = concatR<State>(matchR({[type]: resetState}), c.update)
  return {...c, init, update}
}
