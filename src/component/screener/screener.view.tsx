import * as React from 'react'
import {useState} from 'react'

import {FlatList, View, Text, Pressable} from 'react-native'

import Lifecycle from '../lifecycle'

import {Ticker} from './screener.interface'
import {styles} from './screener.style'

export const ScreenerView = ({e, m, p}) => {
  const tickerList = ['BTC', 'ETH', 'XRP']
  function onTickerSelected(item: Ticker) {
    e.of('onTickerSelected').emit(item)
  }
  const liveItem = ({item}) => {
    return (
      <Pressable onPress={() => onTickerSelected(item)}>
        <View style={styles.rowContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>Rs. {item.price.toLocaleString()}</Text>
        </View>
      </Pressable>
    )
  }

  function mount() {
    e.of('updateState').emit(p)
    e.of('mount').emit(tickerList)
  }

  return (
    <Lifecycle onMount={mount}>
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
