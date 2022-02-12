import React, {FC} from 'react'

import {ColorValue, Pressable, Text, TextInput, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Toast from 'react-native-simple-toast'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {BuySellInterface, BuySellParams} from './buy-sell-screen.interface'
import {styles} from './buy-sell-screen.styles'

export const view: FC<Props<BuySellInterface, BuySellParams>> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> {m.fromCurrency} Amount</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.textCurrencyInputContainer}>
            <TextInput
              style={styles.textCurrencyInput}
              placeholder={'0 '}
              keyboardType="numeric"
              onChangeText={(text) => e.of('onAmountChanged').emit(text)}
              value={m.amount > 0 ? m.amount.toString() : ''}
              autoFocus={true}
            />
          </View>
          <Text style={styles.textCurrencyDonoter}>{m.fromCurrency}</Text>
        </View>
        <Text style={styles.text}>
          Balance: {m.availableBalance} {m.fromCurrency}
        </Text>

        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            return m.amount <= m.availableBalance
              ? e.of('submitExchange').emit({amount: m.amount})
              : Toast.show("You can't buy for more than you have", Toast.LONG)
          }}>
          <Text
            style={[
              styles.button,
              {
                backgroundColor: (m.amount <= m.availableBalance
                  ? '#686000'
                  : '#635F41') as ColorValue,
              },
            ]}>
            Submit Login
          </Text>
        </Pressable>
      </SafeAreaView>
    </Lifecycle>
  )
}
