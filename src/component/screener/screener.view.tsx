import * as React from 'react'
import {FC} from 'react'

import {
  FlatList,
  View,
  Text,
  Pressable,
  RefreshControl,
  Image,
} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {ScreenerInterface, ScreenerParams} from './screener.interface'
import {styles} from './screener.style'
import {getRiskTagText, getRiskTagStyle, getFeatureTags} from './screener.utils'

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

const liveItem = (e: Smitten, item: any) => {
  return (
    <Pressable onPress={() => e.of('onTickerSelected').emit(item)}>
      <View style={styles.rowContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.tickerId}>{item.id}</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.riskTagcontainer}>
            <Text style={getRiskTagStyle(item.riskIndex)}>
              {getRiskTagText(item.riskIndex)}
            </Text>
          </View>
          <View style={styles.featureTagsContainer}>
            {item.tags.map((val) => (
              <Pressable onPress={() => e.of('tagClicked').emit(val.name)}>
                <Image style={styles.featureTag} source={val.icon} />
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.price}>
            Rs. {Math.round((item.price + Number.EPSILON) * 100) / 100}
          </Text>
          <Text
            style={
              item.change < 0
                ? styles.percentageChangeNegative
                : styles.percentageChangePositive
            }>
            {item.change < 0 ? '▼' : '▲'}
            {Math.round(
              ((item.change < 0 ? -item.change : item.change) +
                Number.EPSILON) *
                100,
            ) / 100}
            %
          </Text>
        </View>
      </View>
    </Pressable>
  )
}
