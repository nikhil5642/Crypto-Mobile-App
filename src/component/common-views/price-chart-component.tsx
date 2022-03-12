import React, {useState} from 'react'

import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import Toast from 'react-native-simple-toast'

import Lifecycle from '../lifecycle'

import BluntLineChart from './BluntLineChart'

export const PriceChartComponent = ({chartData}) => {
  const [data, setData] = useState<any>([])
  const [selection, setSelection] = useState('day')

  const updateSelection = (currentSel) => {
    setSelection(currentSel)
    const currentData: any[] = []
    chartData[currentSel]?.forEach((element) => {
      currentData.push({x: element.time, y: element.close})
    })
    setData(currentData)
  }

  const availableKeys = ['day', 'week', 'month', 'year'].map((key) =>
    Object.keys(chartData).includes(key) ? key : undefined,
  )

  return (
    <Lifecycle onMount={() => updateSelection('day')}>
      <BluntLineChart data={data} />
      <View style={styles.bottomBarContainer}>
        {availableKeys.map((key) => (
          <Pressable
            style={[
              styles.tagContainer,
              selection === key ? styles.tagSelected : {},
            ]}
            onPress={() => updateSelection(key)}>
            <Text style={styles.tagText}>{getTagValue(key)}</Text>
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
  } else if (tag === 'week') {
    return '1W'
  } else if (tag === 'month') {
    return '1M'
  } else if (tag === 'year') {
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
