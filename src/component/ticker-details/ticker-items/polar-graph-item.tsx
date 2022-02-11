import React from 'react'

import {View} from 'react-native'

import {
  VictoryBar,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native'

export const PolarGraphItemView = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <VictoryChart polar theme={VictoryTheme.material}>
        {data.map((item, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis={true}
              key={i}
              label={item.x}
              labelPlacement="perpendicular"
              style={{tickLabels: {fill: 'none'}}}
              axisValue={item.x}
            />
          )
        })}
        <VictoryBar style={{data: {fill: 'blue', width: 25}}} data={data} />
      </VictoryChart>
    </View>
  )
}
