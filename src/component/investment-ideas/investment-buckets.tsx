import React from 'react'

import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {getImageURL} from '../../helper/http-helper'

export interface InvestmentBucketItem {
  name: string
  id: string
  imgUrl: string
}

export const bucketList = (
  e: Smitten,
  title: string,
  titleStyle: any,
  buckets: InvestmentBucketItem[],
) => {
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      {buckets.length > 0 ? (
        <FlatList
          data={buckets}
          renderItem={(item) => bucketItem(e, item.item)}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
          horizontal
        />
      ) : (
        <View style={styles.emptyBucketContainer}>
          <Text style={styles.emptyBucketText}> No bucket found</Text>
        </View>
      )}
    </View>
  )
}

const bucketItem = (e: Smitten, item: any) => {
  return (
    <Pressable
      style={styles.bucketItemContainer}
      onPress={() => e.of('openBucket').emit(item.id)}>
      <ImageBackground
        style={styles.bucketItemImage}
        source={{uri: getImageURL(item.imgUrl)}}>
        <View style={styles.bucketItemTextContainer}>
          <Text style={styles.bucketItemText}>{item.name}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bucketItemContainer: {
    flex: 1,
    padding: 12,
  },
  bucketItemImage: {
    aspectRatio: 1,
    width: Dimensions.get('window').width / 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bucketItemTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    padding: 8,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  bucketItemText: {
    elevation: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  emptyBucketContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 12,
    paddingVertical: 16,
    margin: 12,
  },
  emptyBucketText: {alignSelf: 'center'},
})