import * as React from 'react'
import {FC} from 'react'

import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
  RefreshControl,
  ScrollView,
} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import {getImageURL} from '../../helper/http-helper'
import Lifecycle from '../lifecycle'

import {bucketList, InvestmentBucketItem} from './investment-buckets'
import {
  InvestmentIdeasInterface,
  InvestmentIdeasParams,
} from './investment-ideas.interface'
import {styles} from './investment-ideas.style'

export const InvestmentIdeasView: FC<
  Props<InvestmentIdeasInterface, InvestmentIdeasParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={m.causeInvestment}
          renderItem={(item) => ideaItem(e, item.item)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          nestedScrollEnabled
          refreshControl={
            <RefreshControl
              refreshing={m.refreshing}
              onRefresh={() => e.of('mount').emit(p)}
            />
          }
          ListHeaderComponent={
            m.causeInvestment.length > 0 ? (
              <Text style={styles.titleText}>Invest in a Category</Text>
            ) : null
          }
        />
        {bucketList(e, 'Invest in a our buckets', styles.titleText, m.buckets)}
      </ScrollView>
    </Lifecycle>
  )
}

const ideaItem = (e: Smitten, item: any) => {
  return (
    <Pressable
      style={styles.ideaItemContainer}
      onPress={() => e.of('categorySelected').emit(item)}>
      <ImageBackground
        style={styles.ideaItemImage}
        source={{uri: getImageURL(item.imgUrl)}}>
        <View style={styles.ideaItemTextContainer}>
          <Text style={styles.ideaItemText}>{item.name}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}
