import * as React from 'react'
import {FC} from 'react'

import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
} from 'react-native'
import DefaultPreference from 'react-native-default-preference'
import Tooltip from 'react-native-walkthrough-tooltip'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'
import {getImageURL} from '../../helper/http-helper'
import {TooltipItemView} from '../common-views/tooltip-item'
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
  function loadPreference() {
    DefaultPreference.get('investmentIdeasOnboarding').then((val) => {
      e.of('investmentIdeasOnboardingLoaded').emit(val)
    })
  }

  return (
    <Lifecycle
      onMount={() => {
        loadPreference()
        e.of('mount').emit(p)
      }}>
      <ScrollView style={styles.container}>
        {m.causeInvestment.length > 0 ? (
          <Text style={styles.categoryHeaderText}>
            Categories you can explore
          </Text>
        ) : null}
        <FlatList
          data={m.causeInvestment}
          contentContainerStyle={styles.categoriesContentContainer}
          renderItem={(item) =>
            item.index === 0 && m.onBoarding && m.onBoardingType === 'category'
              ? onBoardingIdeaItem(e, item.item)
              : ideaItem(e, item.item)
          }
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {bucketList(
          e,
          'Invest in a our buckets',
          styles.bucketHeaderText,
          m.buckets,
          m.onBoarding && m.onBoardingType === 'buckets',
        )}
      </ScrollView>
    </Lifecycle>
  )
}
const onBoardingIdeaItem = (e: Smitten, item: any) => {
  return (
    <Tooltip
      isVisible={true}
      content={
        <TooltipItemView
          description={'Here you can invest in ' + item.name + ' projects'}
          onContinue={e.of('onBordingInvestInCategoryContinue').emit}
        />
      }
      placement="bottom"
      supportedOrientations={['portrait']}
      useInteractionManager={true}>
      {ideaItem(e, item)}
    </Tooltip>
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
