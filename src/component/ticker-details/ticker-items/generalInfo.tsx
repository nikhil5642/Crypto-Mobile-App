import React, {useState} from 'react'

import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'

export const GeneralInfoItemVIew = ({data}) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text
          style={styles.description}
          numberOfLines={showMore ? undefined : 3}>
          {data.description}
        </Text>
        <Pressable onPress={() => setShowMore(!showMore)}>
          <Text style={styles.showMore}>
            {!showMore ? '...show more' : '...show less'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#686000',
    paddingTop: 20,
  },

  heading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  descriptionContainer: {
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: 'white',
    paddingHorizontal: 20,
  },
  showMore: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    marginRight: 10,
  },
  divider: {backgroundColor: 'white', height: 5},
})
