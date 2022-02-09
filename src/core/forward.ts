import {concatC, concatR, matchC, matchR} from '@action-land/tarz'
import * as R from 'ramda'
import {curry2} from 'ts-curry'

import {Component} from './component'
import {forwardE} from './forward-e'
import {forwardS} from './forward-s'

export const FORWARD_KEY = '__forward__'

export const forward = curry2(
  <State, Params>(p: any, q: any): Component<State, Params> => {
    const init: (t: unknown[]) => State = (...t) => ({
      ...q.init(...t),
      [FORWARD_KEY]: {
        keys: R.keys(p),
      },
    })

    const forwardStates = matchR<State>(
      R.mapObjIndexed(
        (component: Component, prop: string) =>
          forwardS(prop, component.update),
        p,
      ),
    )

    const forwardEffects = matchC<State>(
      R.mapObjIndexed(
        (component: Component, prop: string) =>
          forwardE(prop, component.command),
        p,
      ),
    )
    const update = concatR<State>(forwardStates, q.update)
    const command = concatC<State>(forwardEffects, q.command)
    return {
      ...q,
      init,
      update,
      command,
    }
  },
)
