import React, {FC, useRef} from 'react'

import {ColorValue, Pressable, Text, TextInput, View} from 'react-native'
import Toast from 'react-native-simple-toast'

import BottomSheetModal from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal'

import {Props} from '../../core/component'
import {BluntBottomSheet} from '../common-views/BluntBottomSheet'
import Lifecycle from '../lifecycle'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'
import {styles} from './buy-bottomsheet.styles'

export const BuyBottomSheetView: FC<
  Props<BuyBottomSheetInterface, BuyBottomSheetParams>
> = ({e, m, p}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  return (
    <Lifecycle onMount={() => e.of('load').emit(p)}>
      <BluntBottomSheet
        bottomSheetRef={bottomSheetRef}
        visible={m.visible}
        onDismiss={e.of('dismissBottomSheet').emit}
        height={'40%'}>
        <View style={styles.container}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'0.00'}
              keyboardType="numeric"
              onChangeText={(text) => e.of('onAmountChanged').emit(text)}
              value={m.amountText}
              autoFocus={true}
            />
          </View>
          <Text style={styles.text}>
            Balance: {m.availableBalance.toString()}
          </Text>
          {m.amount > m.availableBalance ? (
            <Text style={styles.warningText}>* Add more funds to process</Text>
          ) : null}
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() =>
            m.amount <= m.availableBalance
              ? e.of('buyFund').emit({})
              : Toast.show("You can't buy for more than you have", Toast.LONG)
          }>
          <Text
            style={[
              styles.button,
              {
                backgroundColor: (m.amount <= m.availableBalance
                  ? '#686000'
                  : '#635F41') as ColorValue,
              },
            ]}>
            Invest Now
          </Text>
        </Pressable>
      </BluntBottomSheet>
    </Lifecycle>
  )
}
