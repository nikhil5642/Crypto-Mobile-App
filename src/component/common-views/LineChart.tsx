import React from 'react'

import {Dimensions} from 'react-native'

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts'

export const {width: SIZE} = Dimensions.get('window')
const LineChart = ({data}) => {
  const points = monotoneCubicInterpolation({data, range: 40})
  return (
    <ChartPathProvider data={{points, smoothingStrategy: 'bezier'}}>
      <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
      <ChartDot style={{backgroundColor: 'blue'}} />
    </ChartPathProvider>
  )
}

export default LineChart
