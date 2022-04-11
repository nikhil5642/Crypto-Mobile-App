import * as React from 'react'
import {FC} from 'react'

import {Text, FlatList, Image, Pressable, ScrollView} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import {getImageURL} from '../../helper/http-helper'
import {accountBalance} from '../Balance/balance'
import Lifecycle from '../lifecycle'

import {bucketList} from './investment-buckets'
import {
  InvestmentIdeasInterface,
  InvestmentIdeasParams,
} from './investment-ideas.interface'
import {styles} from './investment-ideas.style'

export const InvestmentIdeasView: FC<
  Props<InvestmentIdeasInterface, InvestmentIdeasParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle
      onMount={() => {
        e.of('mount').emit(p)
      }}>
      <ScrollView style={styles.container}>
        <accountBalance.view
          e={e.of('accountBalance')}
          p={{userId: p.userId, baseCurrency: p.baseCurrency}}
          m={m.accountBalance}
        />
        {m.causeInvestment.length > 0 ? (
          <Text style={styles.categoryHeaderText}>
            Categories you can explore
          </Text>
        ) : null}
        <FlatList
          data={m.causeInvestment}
          contentContainerStyle={styles.categoriesContentContainer}
          renderItem={(item) => ideaItem(e, item.item)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {bucketList(
          e,
          'Invest in a our buckets',
          styles.bucketHeaderText,
          m.buckets,
          p.baseCurrency,
        )}
      </ScrollView>
    </Lifecycle>
  )
}

const ideaItem = (e: Smitten, item: any) => {
  return (
    <Pressable
      style={styles.ideaItemContainer}
      onPress={() => e.of('categorySelected').emit(item)}>
      <Text style={styles.ideaItemTextHeading}>{item.name}</Text>
      <Text style={styles.ideaItemTextDescrption}>{item.description}</Text>
      <Image
        style={styles.ideaItemImage}
        source={{uri: getImageURL(item.imgUrl)}}
      />
      <Image
        style={styles.ideaItemArrowImage}
        source={require('../../assets/right_arrow_long.png')}
      />
    </Pressable>
  )
}
