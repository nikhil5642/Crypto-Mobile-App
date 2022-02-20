import React, {FC} from 'react'

import {View, Text, Pressable, Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
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
      <ScrollView style={styles.container}>
        <GeneralInfoItemVIew
          data={{name: m.data.name, description: m.data.description}}
        />
        <View style={styles.portfolioContainer}>
          {m.data?.portfolio?.map((item) => portfolioItem(e, item))}
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => e.of('investInBucket').emit({})}>
          <Text style={styles.button}>Invest Now</Text>
        </Pressable>
      </ScrollView>
    </Lifecycle>
  )
}

export const portfolioItem = (e: Smitten, item) => {
  console.log('sflajdf', item)
  return (
    <View style={styles.portfolioItemContainer}>
      <Text style={styles.portfolioItemNameText}>
        {item.name} ({item.id})
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.portfolioItemPercentageText}>
          {(item.contribution * 100).toString()} %
        </Text>
        <Pressable onPress={() => e.of('dropDownSelected').emit(item)}>
          <Image
            source={require('../../assets/ic_drop_down.png')}
            style={styles.portfolioDropdownIcon}
          />
        </Pressable>
      </View>
    </View>
  )
}
