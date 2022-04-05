import React, {useState} from 'react'

import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import Toast from 'react-native-simple-toast'

import Lifecycle from '../lifecycle'

import BluntFlowingLineChart from './BluntFlowingLineChart'
import BluntSimpleLineChart from './BluntSimpleLineChart'

export const PriceChartComponent = ({chartData}) => {
  const [data, setData] = useState<any>([])
  const [selection, setSelection] = useState('')

  const updateSelection = (currentSel) => {
    setSelection(currentSel)
    const currentData: any[] = []
    chartData[currentSel]?.forEach((element) => {
      currentData.push({x: element.time, y: element.close})
    })
    setData(currentData)
  }

  const availableKeys = Object.keys(chartData)

  return (
    <Lifecycle onMount={() => updateSelection(availableKeys[0])}>
      <BluntSimpleLineChart data={data} />
      <View style={styles.bottomBarContainer}>
        {availableKeys.map((item, key) => (
          <Pressable
            key={key}
            style={[
              styles.tagContainer,
              selection === item ? styles.tagSelected : {},
            ]}
            onPress={() => updateSelection(item)}>
            <Text style={styles.tagText}>{getTagValue(item)}</Text>
          </Pressable>
        ))}

        <Pressable
          style={styles.tagContainer}
          onPress={() =>
            Toast.show('Candle Stick chart will be soon available.', Toast.LONG)
          }>
          <Image
            source={require('../../assets/ic_candlestick_chart.png')}
            style={{width: 16, height: 16}}
          />
        </Pressable>
      </View>
    </Lifecycle>
  )
}

const getTagValue = (tag) => {
  if (tag === 'day') {
    return '1D'
  } else if (tag === 'week' || tag === 'one_week') {
    return '1W'
  } else if (tag === 'month' || tag === 'one_month') {
    return '1M'
  } else if (tag === 'three_month') {
    return '3M'
  } else if (tag === 'six_month') {
    return '6M'
  } else if (tag === 'year' || tag === 'one_year') {
    return '1Y'
  }
  return ''
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  tagContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  tagText: {
    color: 'black',
    fontWeight: '500',
    borderRadius: 4,
  },
  tagSelected: {
    backgroundColor: '#d5d5d5',
  },
})
