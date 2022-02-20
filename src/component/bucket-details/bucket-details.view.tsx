import React, {FC} from 'react'

import {View, Text, Pressable} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

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
          {m.data?.portfolio?.map(portfolioItem)}
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

export const portfolioItem = (item) => {
  console.log('sflajdf', item)
  return (
    <View style={styles.portfolioItemContainer}>
      <Text style={styles.portfolioItemText}>
        {item.name} ({item.id})
      </Text>
      <Text style={styles.portfolioItemText}>
        {(item.contribution * 100).toString()} %
      </Text>
    </View>
  )
}
