import React, {FC} from 'react'

import {Animated, Dimensions, Image, Pressable, Text, View} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Props} from '../../core/component'

import {
  OnBoardingSliderInterface,
  OnBoardingSliderParams,
} from './onboarding-slider'
import {styles} from './onboarding-slider.styles'

const SCREEN_WIDTH = Dimensions.get('window').width
export const OnBoardingSliderView: FC<
  Props<OnBoardingSliderInterface, OnBoardingSliderParams>
> = ({e, m}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current

  const onViewChangedRef = React.useRef((current) => {
    e.of('pageChanged').emit(current.viewableItems.pop()?.index ?? 0)
  })
  const pages = [
    {
      image: require('../../assets/ic_knowledge.png'),
      title: 'First Learn Then Earn',
      subtitle:
        "Don't know how to invest in crypto?\n Want to explore but affraid of losing Money? \n\nWell you are at the right place!",
    },
    {
      image: require('../../assets/ic_money_bag.png'),
      title: 'Learn with Virtual Money',
      subtitle:
        '1,00,000 INR of free virtual credit for you to try and learn. \n\nOnce you feel comfortable you can start making some real profits.',
    },
    {
      image: require('../../assets/ic_prize.png'),
      title: "Win Real Prize's",
      subtitle:
        "Profits made during virtual tranding can be conveted to real prize's.",
    },
    {
      image: require('../../assets/ic_professional.png'),
      title: 'Invest Like a Pro',
      subtitle:
        'No more hassle with investing.\n Invest in our buckets created and managed by the experts .',
    },
  ]
  return (
    <SafeAreaProvider style={styles.container}>
      <Animated.FlatList
        ref={(ref) => {
          e.of('setListViewRef').emit(ref)
        }}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        scrollEventThrottle={1}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangedRef.current}
        data={pages}
        decelerationRate="fast"
        bounces={false}
        renderItem={(item) => SliderItem(item.item)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        onEndReached={e.of('endReached').emit}
      />
      {!(m.pageNo === pages.length - 1 && m.endReached) ? (
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.buttonContainer}
            onPress={e.of('completed').emit}>
            <Text style={styles.leftButtonText}>Skip</Text>
          </Pressable>
          <View style={styles.pagination}>
            {pages.map((_) => {
              return <View style={[styles.dot]} />
            })}
            <Animated.View
              style={[
                styles.dotIndicator,
                {
                  transform: [
                    {
                      translateX: Animated.divide(
                        scrollX,
                        SCREEN_WIDTH,
                      ).interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          -12 * (pages.length - 1),
                          -12 * (pages.length - 3),
                        ],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              m.listViewRef.scrollToOffset({
                offset: (m.pageNo + 1) * SCREEN_WIDTH,
                animated: true,
              })
            }}>
            <Text style={styles.rightButtonText}>Next</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.buttonContainer}
            onPress={e.of('completed').emit}>
            <Text style={styles.getStartedText}>Let's Get Started !</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaProvider>
  )
}

const SliderItem = (item) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.subtitle}</Text>
    </View>
  )
}
