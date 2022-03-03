import React from 'react'

import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {getImageURL} from '../../helper/http-helper'

export interface InvestmentBucketItem {
  name: string
  category: string
  description: string
  return_one_yr: string
  unitPrice: string
  minAmount: string
  riskLevel: number
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
          contentContainerStyle={styles.contentContainer}
          renderItem={(item) => bucketItem(e, item.item)}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
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
      <View style={styles.bucketItemHeaderContainer}>
        <Image
          style={styles.bucketItemImage}
          source={{uri: getImageURL(item.imgUrl)}}
        />
        <View>
          <Text style={styles.bucketItemHeaderText}>{item.name}</Text>
          <Text style={styles.bucketItemCategoryText}>{item.category}</Text>
        </View>
        <Text
          style={[
            styles.bucketRiskTag,
            {backgroundColor: riskTagBackground(item.riskLevel)},
          ]}>
          {riskTag(item.riskLevel)}
        </Text>
      </View>
      <Text style={styles.bucketItemShortDescText}>{item.description}</Text>
      <View style={styles.bucketItemFooterContainer}>
        <View style={styles.bucketSubItemFooterContainer}>
          <Text style={styles.bucketItemFooterName}>1Y Returns</Text>
          <Text style={styles.bucketItemFooterValue}>
            {item.return_one_yr}%
          </Text>
        </View>
        <View style={styles.bucketSubItemFooterContainer}>
          <Text style={styles.bucketItemFooterName}>Current Price</Text>
          <Text style={styles.bucketItemFooterValue}>
            {item.unitPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.bucketSubItemFooterContainer}>
          <Text style={styles.bucketItemFooterName}>Min Amount</Text>
          <Text style={styles.bucketItemFooterValue}>{item.minAmount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const riskTag = (value: number) => {
  if (value === 0) {
    return 'Low Risk'
  } else if (value === 1) {
    return 'Moderate Risk'
  } else {
    return 'High Risk'
  }
}
const riskTagBackground = (value: number) => {
  if (value === 0) {
    return '#6F975C'
  } else if (value === 1) {
    return '#D2D462'
  } else {
    return '#FF6361'
  }
}

const styles = StyleSheet.create({
  bucketItemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowOpacity: 0.25,
  },

  contentContainer: {
    paddingBottom: 32,
  },
  bucketItemHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bucketItemImage: {
    aspectRatio: 1,
    width: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  bucketItemHeaderText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 12,
  },
  bucketItemCategoryText: {
    color: '#B4B4B4',
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 12,
  },
  bucketRiskTag: {
    fontSize: 12,
    fontWeight: '600',
    position: 'absolute',
    right: 8,
    top: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 4,
  },
  bucketItemShortDescText: {
    color: '#646464',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 16,
  },

  bucketItemFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },

  bucketSubItemFooterContainer: {
    marginTop: 12,
  },
  bucketItemFooterName: {
    fontSize: 12,
    color: '#646464',
    fontWeight: '500',
  },
  bucketItemFooterValue: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    alignSelf: 'center',
  },

  emptyBucketContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 12,
    paddingVertical: 16,
    margin: 12,
  },
  emptyBucketText: {alignSelf: 'center'},
})
