import React, {FC} from 'react'

import {Pressable, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'

export const view: FC<Props<TickerDetailsInterface, TickerDetailsParams>> = ({
  e,
  p,
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{p.tickerId}</Text>
    </SafeAreaView>
  )
}
