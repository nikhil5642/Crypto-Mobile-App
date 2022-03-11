import React, {FC} from 'react'

import {View, Text, Pressable} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import Tooltip from 'react-native-walkthrough-tooltip'

import {Props} from '../../core/component'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {PolarGraphItemView} from '../common-views/polar-graph-item'
import {PriceChartComponent} from '../common-views/price-chart-component'
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
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={styles.container}>
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
  } else if (item.itemType === 'ChartData') {
    return <PriceChartComponent chartData={item.data} />
  }
  return <View />
}
