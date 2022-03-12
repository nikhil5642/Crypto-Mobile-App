import React, {FC} from 'react'

import {View, Image, Text, Pressable} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import {getImageURL} from '../../helper/http-helper'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {InvestmentBucketItem} from '../investment-ideas/investment-buckets'
import Lifecycle from '../lifecycle'

import {
  CategoryDetailsInterface,
  CatergoryDetailsParams,
} from './category-details.interface'
import {styles} from './category-details.styles'

export const CategoryDetailView: FC<
  Props<CategoryDetailsInterface, CatergoryDetailsParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <ScrollView style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {m.imageUrls.map((image) => (
            <Image source={{uri: image}} style={styles.slidingImage} />
          ))}
        </ScrollView>
        <GeneralInfoItemVIew
          data={{name: m.data.name, description: m.data.description}}
        />
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonHeading}> Top Projects</Text>
          <View style={styles.comingSoonTextContainer}>
            <Text style={styles.comingSoonText}>Coming Soon...</Text>
          </View>
        </View>

        <Text style={styles.bucketsHeading}>
          {'Top ' + m.name + ' Investment Buckets'}
        </Text>

        <View style={styles.bucketsContainer}>
          {m.buckets?.map?.((item) => bucketItem(e, item))}
        </View>

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonHeading}>Experts Projection</Text>
          <View style={styles.comingSoonTextContainer}>
            <Text style={styles.comingSoonText}>Coming Soon...</Text>
          </View>
        </View>

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonHeading}>
            Important upcoming events
          </Text>
          <View style={styles.comingSoonTextContainer}>
            <Text style={styles.comingSoonText}>Coming Soon...</Text>
          </View>
        </View>
      </ScrollView>
    </Lifecycle>
  )
}

const bucketItem = (e: Smitten, item: InvestmentBucketItem) => {
  return (
    <Pressable
      style={styles.bucketItemContainer}
      onPress={() => e.of('openBucket').emit(item.id)}>
      <Image
        style={styles.bucketItemImage}
        source={{uri: getImageURL(item.imgUrl)}}
      />
      <Text style={styles.bucketItemName}>{item.name}</Text>
      <Image
        style={styles.bucketItemArrowImage}
        source={require('../../assets/right_arrow_long.png')}
      />
    </Pressable>
  )
}
