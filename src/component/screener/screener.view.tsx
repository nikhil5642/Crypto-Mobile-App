import * as React from 'react'
import {useState} from 'react'

import {FlatList, View, Text} from 'react-native'

import Lifecycle from '../lifecycle'

import {styles} from './screener.style'

export const ScreenerView = ({e, m}) => {
  const tickerList = ['BTC', 'ETH', 'XRP']
  return (
    <Lifecycle onMount={() => e.of('mount').emit(tickerList)}>
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

const liveItem = ({item}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Rs. {item.price.toLocaleString()}</Text>
    </View>
  )
}
