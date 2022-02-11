import React, {FC} from 'react'

import {View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'
import {styles} from './ticker-details.styles'
import {GeneralInfoItemVIew} from './ticker-items/generalInfo'
import {PolarGraphItemView} from './ticker-items/polar-graph-item'

export const TickerDetailView: FC<
  Props<TickerDetailsInterface, TickerDetailsParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={m.data}
          renderItem={(item) => getAppropriateItem(item.item)}
        />
      </SafeAreaView>
    </Lifecycle>
  )
}

function getAppropriateItem(item: any) {
  if (item.itemType === 'GeneralInfo') {
    return <GeneralInfoItemVIew data={item.data} />
  } else if (item.itemType === 'PolarGraph') {
    return <PolarGraphItemView data={item.data} />
  }
  return <View />
}
