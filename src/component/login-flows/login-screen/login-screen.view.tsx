import React, {FC, useEffect} from 'react'

import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  Text,
  View,
} from 'react-native'
import DefaultPreference from 'react-native-default-preference'
import {TextInput} from 'react-native-gesture-handler'
import OtpInputs from 'react-native-otp-inputs'
import {SafeAreaView} from 'react-native-safe-area-context'
import Toast from 'react-native-simple-toast'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../../core/component'
import Lifecycle from '../../lifecycle'

import {LoginScreenInterface, LoginScreenParams} from './login-screen.interface'
import {styles} from './login-screen.styles'

export const LoginScreenView: FC<
  Props<LoginScreenInterface, LoginScreenParams>
> = ({e, m}) => {
  function onButtonPress() {
    if (m.screen === 'mob')
      m.mobileNumber.length === 10
        ? e.of('sendOTP').emit({})
        : Toast.show('Enter Valid Mobile no. ', Toast.LONG)
    else
      m.otp.length === 6
        ? e.of('verifyOTP').emit({})
        : Toast.show('Enter Valid OTP. ', Toast.LONG)
  }
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (m.timer > 0) {
        e.of('updateTimer').emit({})
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  function loadPreference() {
    DefaultPreference.get('onBoardingSlider').then((val) => {
      e.of('onBoardingSlider').emit(val)
    })
  }

  return (
    <Lifecycle onMount={loadPreference}>
      <SafeAreaView style={styles.container}>
        {m.showLoader ? (
          <ActivityIndicator
            size="large"
            pointerEvents="none"
            color={'#686000'}
            style={styles.activityIndicator}
          />
        ) : null}

        {m.screen === 'mob' ? (
          <View>
            <Text style={styles.welcomeText}>Welcome !</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Mobile Number"
              value={m.mobileNumber}
              onChangeText={(num) => e.of('updateMobileNumber').emit(num)}
              keyboardType="numeric"
              selectionColor="#000"
              maxLength={10}
            />
          </View>
        ) : (
          getOtpView(e, m)
        )}
        <Pressable style={styles.buttonContainer} onPress={onButtonPress}>
          <Text style={getButtonStyle(m)}>
            {m.screen === 'mob' ? 'Send OTP' : 'Verify OTP'}
          </Text>
        </Pressable>
      </SafeAreaView>
    </Lifecycle>
  )
}
function getButtonStyle(state: any) {
  if (state.screen === 'mob')
    return [
      styles.button,
      {
        backgroundColor: (state.length > 2
          ? '#686000'
          : '#635F41') as ColorValue,
      },
    ]
  else return [styles.button, {backgroundColor: '#686000'}]
}

function getOtpView(e: Smitten, state: any) {
  return (
    <View style={styles.otpViewContianer}>
      <Text style={{color: 'gray'}}>Enter OTP sent to:</Text>
      <Text style={styles.mobileNumberText}>+91-{state.mobileNumber}</Text>
      <OtpInputs
        clearTextOnFocus
        handleChange={(value) => e.of('otpChanged').emit(value)}
        keyboardType="phone-pad"
        numberOfInputs={6}
        selectTextOnFocus={false}
        autofillFromClipboard={false}
        inputStyles={styles.otpText}
        style={styles.otpContainer}
      />
      <View style={styles.otpPageBottomTextContainer}>
        <Text style={{color: 'gray'}}>Didn't receive the OTP? </Text>
        <Pressable
          onPress={() => (state.timer === 0 ? e.of('sendOTP').emit({}) : null)}>
          <Text style={styles.resendOTP}>
            Resend OTP {state.timer > 0 ? ' in ' + state.timer.toString() : ''}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
