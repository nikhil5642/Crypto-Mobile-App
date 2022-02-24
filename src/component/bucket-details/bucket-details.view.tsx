import React, {FC} from 'react'

import {View, Text, Pressable} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import {Props} from '../../core/component'
import {GeneralInfoItemVIew} from '../common-views/generalInfo'
import {PieGraphItemView} from '../common-views/pie-graph-item'
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
        <ScrollView>
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
      </View>
    </Lifecycle>
  )
}
