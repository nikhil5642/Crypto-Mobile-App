import React, {useState} from 'react'

import {Pressable, StyleSheet, Text, View} from 'react-native'

export const GeneralInfoItemVIew = ({data}) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.name}</Text>
      <Text style={styles.description} numberOfLines={showMore ? undefined : 3}>
        {data.description}
      </Text>
      <Pressable onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>
          {!showMore ? '...show more' : '...show less'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 1,
  },

  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 12,
  },

  description: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  showMore: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '400',
    color: 'blue',
    marginRight: 12,
    marginBottom: 12,
  },
})
