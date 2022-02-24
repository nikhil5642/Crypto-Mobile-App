import React from 'react'

import {StyleSheet, Text, View} from 'react-native'

export const TooltipSimpleItemView = (item: TooltipSimpleInterFace) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  )
}
export interface TooltipSimpleInterFace {
  description: any
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  descriptionText: {
    fontSize: 12,
    color: 'black',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
})
