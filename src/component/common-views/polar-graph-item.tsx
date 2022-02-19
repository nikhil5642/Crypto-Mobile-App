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
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 12,
        marginHorizontal: 12,
        borderRadius: 12,
      }}>
      <VictoryChart polar theme={VictoryTheme.material}>
        <VictoryLabel
          text={data.title}
          x={SCREEN_WIDTH * 0.5}
          y={SCREEN_WIDTH * 0.03}
          textAnchor="middle"
          style={{
            fontSize: 18,
            fill: 'black',
            fontWeight: '600',
            paddingBottom: 12,
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
                axis: {stroke: 'blue'},
                axisLabel: {fill: 'blue'},
                grid: {
                  stroke: 'blue', //CHANGE COLOR OF X-AXIS GRID LINES
                  strokeDasharray: '7',
                },
              }}
              axisValue={item.x}
            />
          )
        })}
        <VictoryBar
          style={{data: {fill: 'lightblue', width: 25}}}
          data={data.values}
        />
      </VictoryChart>
    </View>
  )
}
