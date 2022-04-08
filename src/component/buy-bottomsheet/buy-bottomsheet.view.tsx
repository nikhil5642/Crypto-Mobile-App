import React, {FC} from 'react'

import {ColorValue, Pressable, Text, TextInput, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Toast from 'react-native-simple-toast'

import {Props} from '../../core/component'
import {BluntBottomSheet} from '../common-views/BluntBottomSheet'
import Lifecycle from '../lifecycle'

import {
  BuyBottomSheetInterface,
  BuyBottomSheetParams,
} from './buy-bottomsheet.interface'
import {styles} from './buy-bottomsheet.styles'

export const view: FC<Props<BuyBottomSheetInterface, BuyBottomSheetParams>> = ({
  e,
  m,
  p,
}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <BluntBottomSheet
        bottomSheetRef={undefined}
        visible={true}
        onDismiss={undefined}>
        <View style={{backgroundColor: 'purple'}} />
      </BluntBottomSheet>
    </Lifecycle>
  )
}
