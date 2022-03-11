import React from 'react'

import {Dimensions, Text, View} from 'react-native'

import {
  VictoryArea,
  VictoryChart,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native'

export const PolarGraphItemView = ({data}) => {
  const SCREEN_WIDTH = Dimensions.get('window').width
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 12,
        marginHorizontal: 12,
        // borderRadius: 12,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: '600',
          alignSelf: 'center',
        }}>
        {data.title}
      </Text>
      <VictoryChart
        polar
        theme={VictoryTheme.material}
        height={SCREEN_WIDTH * 0.8}
        width={SCREEN_WIDTH * 0.8}
        domain={{y: [0, 100]}}
        startAngle={0}
        endAngle={360}>
        {data.values.map((item, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis
              key={i}
              label={item.x}
              axisValue={item.x}
              labelPlacement="perpendicular"
              style={{
                axis: {stroke: 'none'},
                grid:
                  i === 0
                    ? {
                        fill: 'black',
                        fillOpacity: 0.1,
                        strokeOpacity: 0,
                      }
                    : {strokeOpacity: 0},
                tickLabels: {
                  fillOpacity: 0,
                },
              }}
              axisLabelComponent={
                <VictoryLabel
                  labelPlacement="perpendicular"
                  style={{
                    fontSize: 12,
                    fill: 'black',
                    fontWeight: '600',
                  }}
                />
              }
            />
          )
        })}
        <VictoryArea
          data={data.values}
          interpolation="cardinal"
          style={{
            data: {
              fill: 'yellow',
              fillOpacity: 0.4,
              stroke: 'yellow',
              strokeWidth: '2',
            },
          }}
        />
      </VictoryChart>
    </View>
  )
}
