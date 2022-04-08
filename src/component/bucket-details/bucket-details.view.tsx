import React, {FC, useRef, useState} from 'react'

import {View, Text, Pressable, Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {Props} from '../../core/component'
import {buyBottomSheet} from '../buy-bottomsheet/buy-bottomsheet'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {PieGraphItemView} from '../common-views/pie-graph-item'
import {PriceChartComponent} from '../common-views/price-chart-component'
import Lifecycle from '../lifecycle'

import {
  BucketDetailsInterface,
  BucketDetailsParams,
} from './bucket-details.interface'
import {styles} from './bucket-details.styles'

export const BucketDetailView: FC<
  Props<BucketDetailsInterface, BucketDetailsParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable onPress={e.of('back').emit}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/ic_back_arrow.png')}
            />
          </Pressable>
          <Text style={styles.titleText}>{m.data.name}</Text>
        </View>
        <ScrollView>
          {m.chartData ? <PriceChartComponent chartData={m.chartData} /> : null}
          <GeneralInfoItemVIew
            data={{name: m.data.name, description: m.data.description}}
          />

          {m.portfolioData?.values?.length > 0 ? (
            <PieGraphItemView data={m.portfolioData} />
          ) : null}
        </ScrollView>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => e.of('investInBucket').emit({})}>
          <Text style={styles.button}>Invest Now</Text>
        </Pressable>
        {m.buyBottomSheet.visible && (
          <buyBottomSheet.view
            e={e.of('buyBottomSheet')}
            m={m.buyBottomSheet}
            p={{userId: p.userId, fundID: p.bucketId}}
          />
        )}
      </View>
    </Lifecycle>
  )
}
