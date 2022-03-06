import React, {FC, useState} from 'react'

import {View, Text, Pressable} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import Tooltip from 'react-native-walkthrough-tooltip'

import {Props} from '../../core/component'
import LineChart from '../common-views/LineChart'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {PolarGraphItemView} from '../common-views/polar-graph-item'
import {TooltipSimpleItemView} from '../common-views/tooltip-simple-item'
import Lifecycle from '../lifecycle'

import {
  TickerDetailsInterface,
  TickerDetailsParams,
} from './ticker-details.interface'
import {styles} from './ticker-details.styles'

export const TickerDetailView: FC<
  Props<TickerDetailsInterface, TickerDetailsParams>
> = ({e, m, p}) => {
  const data1 = [
    {x: 1453075200, y: 1.47},
    {x: 1453161600, y: 1.37},
    {x: 1453248000, y: 1.53},
    {x: 1453334400, y: 1.54},
    {x: 1453420800, y: 1.52},
    {x: 1453507200, y: 2.03},
    {x: 1453593600, y: 2.1},
    {x: 1453680000, y: 2.5},
    {x: 1453766400, y: 2.3},
    {x: 1453852800, y: 2.42},
    {x: 1453939200, y: 2.55},
    {x: 1454025600, y: 2.41},
    {x: 1454112000, y: 2.43},
    {x: 1454198400, y: 2.2},
  ]
  const data2 = [
    {x: 1453075200, y: 1.7},
    {x: 1453161600, y: 1.37},
    {x: 1453248000, y: 1.3},
    {x: 1453334400, y: 1.5},
    {x: 1453420800, y: 1.52},
    {x: 1453507200, y: 2.3},
    {x: 1453593600, y: 2.1},
    {x: 1453680000, y: 2.5},
    {x: 1453766400, y: 2.0},
    {x: 1453852800, y: 2.2},
    {x: 1453939200, y: 2.55},
    {x: 1454025600, y: 20.1},
    {x: 1454112000, y: 2.3},
    {x: 1454198400, y: 2.2},
  ]

  const [data, setData] = useState(data1)

  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={styles.container}>
        <View>
          <LineChart data={data} />
        </View>

        <Pressable onPress={() => setData(data2)}>
          <Text>Press Me</Text>
        </Pressable>
        <FlatList
          data={m.data}
          bounces={false}
          renderItem={(item) => getAppropriateItem(item.item)}
        />

        <View style={styles.buySellContainer}>
          <Tooltip
            isVisible={m.onBoarding}
            content={
              <TooltipSimpleItemView
                description={
                  'Just few step away from buying your first currency. \nClick Below to buy.'
                }
              />
            }
            placement="top"
            supportedOrientations={['portrait']}
            useInteractionManager={true}>
            <Pressable
              style={styles.buyContainer}
              onPress={e.of('buyTicker').emit}>
              <Text style={styles.buyText}>Buy</Text>
            </Pressable>
          </Tooltip>
          <Pressable
            style={styles.sellContainer}
            onPress={e.of('sellTicker').emit}>
            <Text style={styles.sellText}>Sell</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Lifecycle>
  )
}

function getAppropriateItem(item: any) {
  if (item.itemType === 'GeneralInfo') {
    return <GeneralInfoItemVIew data={item.data} />
  } else if (item.itemType === 'PolarGraph') {
    return <PolarGraphItemView data={item.data} />
  }
  return <View />
}
