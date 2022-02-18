import React, {FC} from 'react'

import DefaultPreference from 'react-native-default-preference'
import {SafeAreaView} from 'react-native-safe-area-context'

import SplashLogo from '../../assets/SplashLogo'
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
        <SplashLogo width={'60%'} aspectRatio={1} alignSelf={'center'} />
      </SafeAreaView>
    </Lifecycle>
  )
}
