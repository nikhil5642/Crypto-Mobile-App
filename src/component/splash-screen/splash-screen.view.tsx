import React, {FC} from 'react'

import {Text, View} from 'react-native'
import DefaultPreference from 'react-native-default-preference'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {
  SplashScreenInterface,
  SplashScreenParams,
} from './splash-screen.interface'
import {styles} from './splash-screen.styles'

export const view: FC<Props<SplashScreenInterface, SplashScreenParams>> = ({
  e,
}) => {
  function loadPreference() {
    DefaultPreference.get('auth').then((auth) => {
      e.of('mount').emit(auth)
    })
  }

  return (
    <Lifecycle onMount={loadPreference}>
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> First Learn then remove the 'L'</Text>
        </View>
      </SafeAreaView>
    </Lifecycle>
  )
}
