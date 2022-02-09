import React, {FC, useState} from 'react'

import {Alert, ColorValue, Pressable, Text} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import Toast from 'react-native-simple-toast'

import {Props} from '../../../core/component'

import {LoginScreenInterface, LoginScreenParams} from './login-screen.interface'
import {styles} from './login-screen.styles'

export const LoginScreenView: FC<
  Props<LoginScreenInterface, LoginScreenParams>
> = ({e}) => {
  const [mobileNo, setMobileNo] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="mobile no"
        value={mobileNo}
        onChangeText={(num) => setMobileNo(num.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        selectionColor="#000"
        maxLength={10}
      />
      <Pressable
        style={styles.buttonContainer}
        onPress={() =>
          mobileNo.length === 10
            ? e.of('submitLogin').emit({mobNum: mobileNo})
            : Toast.show('Enter Valid Mobile no.', Toast.LONG)
        }>
        <Text
          style={[
            styles.button,
            {
              backgroundColor: (mobileNo.length > 2
                ? '#686000'
                : '#635F41') as ColorValue,
            },
          ]}>
          Submit Login
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}
