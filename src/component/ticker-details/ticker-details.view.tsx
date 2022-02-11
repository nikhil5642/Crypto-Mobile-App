import React, {FC} from 'react'

import {Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'
import {styles} from './ticker-details.styles'

export const view: FC<Props<TickerDetailsInterface, TickerDetailsParams>> = ({
  p,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{p.tickerId}</Text>
    </SafeAreaView>
  )
}
