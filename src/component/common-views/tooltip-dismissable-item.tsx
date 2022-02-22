import React from 'react'

import {Pressable, StyleSheet, Text, View} from 'react-native'

export const TooltipDismissableItemView = (item: TooltipInterFace) => {
  return (
    <View style={styles.container}>
      <Text>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={item.onDismiss} style={styles.dissmissContainer}>
          <Text>Dismiss</Text>
        </Pressable>
        <Pressable onPress={item.onContinue} style={styles.continueContainer}>
          <Text>Continue</Text>
        </Pressable>
      </View>
    </View>
  )
}
export interface TooltipDismissableInterFace {
  description: any
  onDismiss: any
  onContinue: any
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  dissmissContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  continueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    marginLeft: 8,
  },
})
