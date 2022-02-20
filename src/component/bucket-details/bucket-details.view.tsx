import React, {FC} from 'react'

import {View, Image, Text} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'

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
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonHeading}> Top Projects</Text>
          <View style={styles.comingSoonTextContainer}>
            <Text style={styles.comingSoonText}>Coming Soon...</Text>
          </View>
        </View>

        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonHeading}>
            Top {m.name} Investment Buckets
          </Text>
          <View style={styles.comingSoonTextContainer}>
            <Text style={styles.comingSoonText}>Coming Soon...</Text>
          </View>
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
