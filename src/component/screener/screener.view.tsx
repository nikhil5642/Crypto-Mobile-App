import * as React from 'react'
import {FC} from 'react'

import {FlatList, View, Text, Pressable, RefreshControl} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {ScreenerInterface, ScreenerParams} from './screener.interface'
import {styles} from './screener.style'

export const ScreenerView: FC<Props<ScreenerInterface, ScreenerParams>> = ({
  e,
  m,
  p,
}) => {
  const tickerList = ['BTC', 'ETH', 'XRP', 'AVAX']

  return (
    <Lifecycle
      onMount={() =>
        e.of('mount').emit({userId: p.userId, tickers: tickerList})
      }>
      <View style={styles.container}>
        <FlatList
          data={m.data}
          renderItem={(item) => liveItem(e, item.item)}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={m.refreshing}
              onRefresh={() => e.of('onRefresh').emit({})}
            />
          }
        />
      </View>
    </Lifecycle>
  )
}

const liveItem = (e: Smitten, item) => {
  console.log('dfja;ldaslfa', item)
  return (
    <Pressable onPress={() => e.of('onTickerSelected').emit(item)}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.tickerId}>{item.id}</Text>
        </View>
        <View>
          <Text style={styles.price}>Rs. {item.price.toLocaleString()}</Text>
          <Text
            style={
              item.change < 0
                ? styles.percentageChangeNegative
                : styles.percentageChangePositive
            }>
            {item.change < 0 ? '⬇' : '⬆'}
            {(item.change < 0 ? -item.change : item.change).toLocaleString()} %
          </Text>
        </View>
      </View>
    </Pressable>
  )
}
