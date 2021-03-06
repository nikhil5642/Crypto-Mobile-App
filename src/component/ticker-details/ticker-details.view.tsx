import React, {FC} from 'react'

import {View, Text, Pressable} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {PolarGraphItemView} from '../common-views/polar-graph-item'
import {PriceChartComponent} from '../common-views/price-chart-component'
import {TagListItemView} from '../common-views/tagsList'
import Lifecycle from '../lifecycle'

import {
  getStablitityGraphTitleText,
  getStatbilityGraphTitleStyle,
} from './ticker-details-utils'
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
          <Pressable
            style={styles.buyContainer}
            onPress={e.of('buyTicker').emit}>
            <Text style={styles.buyText}>Buy</Text>
          </Pressable>

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
    return (
      <PolarGraphItemView
        title={getTitle(item.data.overall)}
        values={item.data.values}
      />
    )
  } else if (item.itemType === 'ChartData') {
    return <PriceChartComponent chartData={item.data} />
  } else if (item.itemType === 'Tags') {
    return <TagListItemView data={item.data} />
  }
  return <View />
}

function getTitle(overallScore: number) {
  return (
    <View>
      <Text style={getStatbilityGraphTitleStyle(overallScore)}>
        {getStablitityGraphTitleText(overallScore)}
      </Text>
    </View>
  )
}
