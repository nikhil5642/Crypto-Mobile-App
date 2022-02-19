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
      <ScrollView style={styles.container}>
        {m.causeInvestment.length > 0 ? (
          <Text style={styles.titleText}>Invest in a Category</Text>
        ) : null}
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
        />
        <Text style={styles.titleText}>Invest in a ICO</Text>
        <View style={styles.comingSoonTextContainer}>
          <Text style={styles.comingSoonText}>Coming Soon...</Text>
        </View>
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
