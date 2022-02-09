import React, {FC} from 'react'

import {Pressable, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'

import {DetailsInterface, DetailsParams} from './details.interface'

export const view: FC<Props<DetailsInterface, DetailsParams>> = ({e}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'fadded'}}>
      <Text>HOME</Text>
      <Pressable
        style={{backgroundColor: 'green'}}
        onPress={e.of('openHome').emit}>
        <Text> GO to Home</Text>
      </Pressable>
      <Pressable style={{backgroundColor: 'green'}} onPress={e.of('back').emit}>
        <Text> GO Back</Text>
      </Pressable>
    </SafeAreaView>
  )
}
