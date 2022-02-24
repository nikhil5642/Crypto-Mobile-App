import React, {useState} from 'react'

import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {Svg} from 'react-native-svg'

import {VictoryPie} from 'victory-native'

const colorSchemas = [
  '#c6d68f',
  '#ceda9f',
  '#d5dfaf',
  '#dce3c0',
  '#e3e8d0',
  '#eaece0',
  '#f1f1f1',
  '#f1d4d4',
  '#f0b8b8',
  '#ec9c9d',
  '#e67f83',
  '#de6069',
  '#d43d51',
]
const SCREEN_WIDTH = Dimensions.get('window').width

export const PieGraphItemView = ({data}) => {
  const [selectedItemName, setSelectedItemName] = useState('')
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={styles.container}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          paddingTop: 12,
          fontSize: 18,
          color: 'black',
          fontWeight: '600',
        }}>
        {data.title}
      </Text>
      <Svg width={SCREEN_WIDTH * 0.8} height={SCREEN_WIDTH * 0.8}>
        <VictoryPie
          padAngle={1}
          colorScale={colorSchemas}
          innerRadius={70}
          radius={({datum}) => {
            return selectedItemName === datum.x
              ? SCREEN_WIDTH * 0.4
              : SCREEN_WIDTH * 0.4 - 10
          }}
          data={data.values}
          labels={({datum}) => datum.y + ' %'}
          labelRadius={({innerRadius}) =>
            (SCREEN_WIDTH * 0.4 + (innerRadius as number)) / 2
          }
          width={SCREEN_WIDTH * 0.8}
          height={SCREEN_WIDTH * 0.8}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      mutation: (props) => {
                        setSelectedItemName(props.datum.x)
                      },
                    },
                  ]
                },
              },
            },
          ]}
          style={{
            labels: {
              fill: 'black',
              fontSize: 16,
              fontWeight: '600',
              textAnchor: 'middle',
              verticalAnchor: 'middle',
            },
            parent: {
              alignSelf: 'center',
            },
          }}
        />
      </Svg>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          top: SCREEN_WIDTH * 0.4 + 24,
          alignSelf: 'center',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: '600',
            alignSelf: 'center',
          }}>
          {data.values.length}
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 8,
            fontSize: 12,
            color: 'gray',
            fontWeight: '600',
            alignSelf: 'center',
          }}>
          {data.title} Items
        </Text>
      </View>
      <View style={styles.pieLabelContainer}>
        <FlatList
          data={data.values}
          renderItem={(item) =>
            portfolioItem(item, selectedItemName, setSelectedItemName)
          }
        />
      </View>
    </View>
  )
}

export const portfolioItem = (
  {index, item},
  selectedItemName,
  setSelectedItemName,
) => {
  console.log(item)
  return (
    <Pressable
      style={[
        styles.pieLabelItemContainer,
        {
          backgroundColor:
            selectedItemName === item.x ? colorSchemas[index] : 'white',
        },
      ]}
      onPress={() => setSelectedItemName(item.x)}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            styles.pieLabelColour,
            {
              backgroundColor:
                selectedItemName === item.x ? 'white' : colorSchemas[index],
            },
          ]}
        />
        <Text
          style={[
            styles.pieLabelItemNameText,
            {color: selectedItemName === item.x ? 'white' : 'black'},
          ]}>
          {item.x}
        </Text>
      </View>
      <Text
        style={[
          styles.pieLabelItemPercentageText,
          {color: selectedItemName === item.x ? 'white' : 'black'},
        ]}>
        {item.y} %
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 12,
    marginBottom: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  pieLabelContainer: {
    paddingTop: 12,
  },

  pieLabelItemContainer: {
    width: SCREEN_WIDTH * 0.8,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  pieLabelColour: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    borderRadius: 2,
  },
  pieLabelItemNameText: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 12,
  },
  pieLabelItemPercentageText: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
})
