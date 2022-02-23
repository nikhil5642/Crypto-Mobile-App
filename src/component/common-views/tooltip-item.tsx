import React from 'react'

import {Pressable, StyleSheet, Text, View} from 'react-native'

export const TooltipItemView = (item: TooltipInterFace) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <Pressable onPress={item.onContinue} style={styles.continueContainer}>
        <Text style={styles.continueText}>
          {item.lastItem ? 'DONE' : 'Continue'}
        </Text>
      </Pressable>
    </View>
  )
}
export interface TooltipInterFace {
  description: any
  onContinue: any
  lastItem?: boolean
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
  continueContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
    backgroundColor: '#686000',
    borderRadius: 4,
  },
  continueText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
})
