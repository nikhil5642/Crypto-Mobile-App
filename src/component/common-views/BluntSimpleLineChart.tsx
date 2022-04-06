import React, {useState} from 'react'

import {Dimensions, StyleSheet, Text, View} from 'react-native'

import {first, last, maxBy} from 'lodash'
import {
  LineSegment,
  VictoryAxis,
  VictoryChart,
  VictoryCursorContainer,
  VictoryLine,
  VictoryScatter,
} from 'victory-native'

export const SIZE = Dimensions.get('window').width - 24
const BluntSimpleLineChart = ({data}) => {
  const [price, setPrice] = useState(0)
  const [time, setTime] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const findClosestPointSorted = (value) => {
    if (value === null) return null
    const start = first(data).x
    const range = last(data).x - start
    const index = Math.round(((value - start) / range) * (data.length - 1))
    return data[index]
  }

  const formatPrice = (value) => {
    if (value === '') {
      return ''
    }
    return `$${Number(value).toLocaleString('en-US', {currency: 'USD'})}`
  }

  const formatDate = (timestamp) => {
    if (timestamp === '') {
      return ''
    }
    const d = new Date(Math.round(timestamp * 1000))
    return d.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  }
  const handleCursorChange = (value) => {
    const closestPoint = findClosestPointSorted(value)
    if (closestPoint) {
      setPrice(closestPoint.y)
      setTime(closestPoint.x)
    }
  }
  return (
    <View style={styles.container}>
      {showHeader && (
        <View style={styles.headerContainer}>
          <Text style={styles.priceText}>{formatPrice(price.toFixed(2))}</Text>
          <Text style={styles.dateText}>{formatDate(time)}</Text>
        </View>
      )}

      <VictoryChart
        width={SIZE}
        height={SIZE * 0.6}
        containerComponent={
          <VictoryCursorContainer
            cursorDimension="x"
            onTouchStart={() => setShowHeader(true)}
            onTouchEnd={() => setShowHeader(false)}
            onCursorChange={(value) => {
              handleCursorChange(value)
            }}
            cursorComponent={<LineSegment />}
          />
        }
        padding={{top: 16, bottom: 16, right: 0, left: 0}}>
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
          }}
        />
        {showHeader && (
          <VictoryScatter
            data={[{x: time, y: price}]}
            style={{
              data: {
                fill: '#c43a31',
                stroke: '#c43a31',
              },
            }}
          />
        )}

        <VictoryLine
          interpolation="natural"
          data={data}
          style={{
            data: {
              stroke: 'blue',
              strokeWidth: showHeader ? 1 : 1.5,
            },
          }}
        />
      </VictoryChart>
    </View>
  )
}

export default BluntSimpleLineChart

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginLeft: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    marginRight: 16,
  },
})
