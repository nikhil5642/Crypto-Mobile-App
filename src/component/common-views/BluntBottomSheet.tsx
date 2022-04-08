import React, {useCallback, useMemo, useRef, useState} from 'react'

import {Pressable, StyleSheet, View} from 'react-native'

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'

export const BluntBottomSheet = ({
  children,
  bottomSheetRef,
  visible,
  onDismiss,
}) => {
  if (visible) {
    bottomSheetRef?.current?.present()
  } else {
    bottomSheetRef?.current?.dismiss()
  }
  const snapPoints = useMemo(() => ['20%'], [])
  const close = useCallback(() => {
    onDismiss()
    bottomSheetRef?.current?.dismiss()
  }, [bottomSheetRef, onDismiss])

  return (
    <View
      style={[
        styles.container,
        {
          height: visible ? '100%' : 0,
          width: visible ? '100%' : 0,
        },
      ]}>
      <BottomSheetModalProvider>
        <Pressable style={styles.bottomSheetOverlay} onPress={close} />
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onDismiss={close}>
          {children}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
  },
  bottomSheetOverlay: {
    backgroundColor: 'black',
    opacity: 0.1,
    flex: 1,
  },
})
