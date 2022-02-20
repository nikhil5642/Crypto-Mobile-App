import React, {PureComponent} from 'react'

import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Action} from '@action-land/core'
import {create} from '@action-land/smitten'

import consoleLogger from './core/console-logger'
import {processNewAction} from './helper/action-helper'
import {navigator} from './navigator/navigator'
import {Navigator, Routes} from './navigator/navigator.interface'

interface InitParams {
  route?: string
  params?: Record<string, unknown>
}

class App extends PureComponent<InitParams> {
  state = navigator.init()

  e = create((action: Action<unknown>) => {
    const newAction = navigator.command(action, this.state as Navigator)
    processNewAction(this.e, newAction)

    this.setState((prevState) => {
      const newState = navigator.update(action, this.state as Navigator)
      consoleLogger({
        action,
        command: newAction,
        preState: prevState,
        currState: newState,
      })
      return newState
    })
  })

  constructor(p: InitParams) {
    super(p)
  }

  render() {
    return (
      <navigator.view
        e={this.e}
        m={this.state}
        p={{
          route: Routes.SplashScreen,
          params: {},
        }}
      />
      // <navigator.view
      //   e={this.e}
      //   m={this.state}
      //   p={{
      //     route: Routes.BucketDetailsScreen,
      //     params: {userId: '1', bucketId: 'bucket_x'},
      //   }}
      // />
    )
  }
}

export default (p: InitParams) => (
  <SafeAreaProvider>
    <App {...p} />
  </SafeAreaProvider>
)
