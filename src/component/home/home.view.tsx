import React, {FC} from 'react'

import {Pressable, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'

import {HomeInterface, HomeParams} from './home.interface'

export const view: FC<Props<HomeInterface, HomeParams>> = ({e}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'fadded'}}>
      <Text>HOME</Text>
      <Pressable
        style={{backgroundColor: 'green'}}
        onPress={e.of('openDetails').emit}>
        <Text> GO to Details</Text>
      </Pressable>
      <Pressable style={{backgroundColor: 'green'}} onPress={e.of('back').emit}>
        <Text> GO Back</Text>
      </Pressable>
      <Pressable
        style={{backgroundColor: 'green'}}
        onPress={e.of('backTop').emit}>
        <Text> GO Back top</Text>
      </Pressable>
    </SafeAreaView>
  )
}
