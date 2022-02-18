import React from 'react'

import {Dimensions, View} from 'react-native'

import {
  Text,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native'

export const PolarGraphItemView = ({data}) => {
  const SCREEN_WIDTH = Dimensions.get('window').width
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#686000',
        flexDirection: 'column',
        paddingTop: 10,
      }}>
      <VictoryChart polar theme={VictoryTheme.material}>
        <VictoryLabel
          text={data.title}
          x={SCREEN_WIDTH * 0.5}
          y={SCREEN_WIDTH * 0.03}
          textAnchor="middle"
          style={{
            fontSize: 15,
            fill: '#FFFFFF',
            fontWeight: '400',
          }}
        />
        {data.values.map((item, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis={true}
              key={i}
              label={item.x}
              labelPlacement="perpendicular"
              style={{
                tickLabels: {fill: 'none'},
                axis: {stroke: 'white'},
                axisLabel: {fill: 'white'},
                grid: {
                  stroke: 'white', //CHANGE COLOR OF X-AXIS GRID LINES
                  strokeDasharray: '7',
                },
              }}
              axisValue={item.x}
            />
          )
        })}
        <VictoryBar
          style={{data: {fill: 'white', width: 25}}}
          data={data.values}
        />
      </VictoryChart>
    </View>
  )
}
