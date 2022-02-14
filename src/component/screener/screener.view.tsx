import * as React from 'react'
import {FC, useState} from 'react'

import {FlatList, View, Text, Pressable} from 'react-native'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {ScreenerInterface, ScreenerParams, Ticker} from './screener.interface'
import {styles} from './screener.style'

export const ScreenerView: FC<Props<ScreenerInterface, ScreenerParams>> = ({
  e,
  m,
  p,
}) => {
  const tickerList = ['BTC', 'ETH', 'XRP']
  const liveItem = ({item}) => {
    return (
      <Pressable onPress={() => e.of('onTickerSelected').emit(item)}>
        <View style={styles.rowContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>Rs. {item.price.toLocaleString()}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <Lifecycle
      onMount={() =>
        e.of('mount').emit({userId: p.userId, tickers: tickerList})
      }>
      <View style={styles.container}>
        <FlatList
          data={m.data}
          renderItem={liveItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Lifecycle>
  )
}
