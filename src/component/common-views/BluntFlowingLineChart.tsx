import React from 'react'

import {Dimensions, StyleSheet, View} from 'react-native'

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  ChartYLabel,
  ChartXLabel,
} from '@rainbow-me/animated-charts'

export const SIZE = Dimensions.get('window').width - 24
const BluntFlowingLineChart = ({data}) => {
  const points = monotoneCubicInterpolation({data, range: 100})
  const formatPrice = (value) => {
    'worklet'
    if (value === '') {
      return ''
    }
    return `₹ ${Number(value).toLocaleString('en-IN', {currency: 'INR'})}`
  }

  const formatDate = (timestamp) => {
    'worklet'
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
  return (
    <View style={styles.container}>
      <ChartPathProvider data={{points, smoothingStrategy: 'bezier'}}>
        <View style={styles.headerContainer}>
          <ChartYLabel format={formatPrice} style={styles.priceText} />
          <ChartXLabel format={formatDate} style={styles.dateText} />
        </View>
        <View>
          <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
          <ChartDot style={{backgroundColor: 'black'}} />
        </View>
      </ChartPathProvider>
    </View>
  )
}

export default BluntFlowingLineChart

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
