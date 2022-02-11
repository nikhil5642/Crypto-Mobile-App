import React from 'react'

import {StyleSheet, Text, TextInput, View} from 'react-native'

export const GeneralInfoItemVIew = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
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
  description: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginTop: 12,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  divider: {backgroundColor: 'white', height: 5},
})
