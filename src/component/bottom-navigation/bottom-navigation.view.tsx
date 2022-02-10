import * as React from 'react'
import {FC} from 'react'

import {Pressable, View} from 'react-native'
import {Text} from 'react-native'

import {Smitten} from '@action-land/smitten'

import {Props} from '../../core/component'

import {
  BottomNavigationInterface,
  BottomNavigationOptions,
  BottomNavigationParams,
} from './bottom-navigation.interface'
import {styles} from './bottom-navigation.style'

export const BottomNavigationView: FC<
  Props<BottomNavigationInterface, BottomNavigationParams>
> = ({e, m}) => {
  console.log(
    m.selection,
    BottomNavigationOptions.Market,
    m.selection === BottomNavigationOptions.Market,
    'dkflakjk;fla;/ljs;',
  )
  return (
    <View style={styles.container}>
      {getItem(
        e,
        m.selection === BottomNavigationOptions.Market,
        BottomNavigationOptions.Market,
      )}
      {getItem(
        e,
        m.selection === BottomNavigationOptions.PortFolio,
        BottomNavigationOptions.PortFolio,
      )}
    </View>
  )
}
function getItem(
  e: Smitten,
  isSelected: boolean,
  currentItem: BottomNavigationOptions,
) {
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => e.of('onOptionSelected').emit(currentItem)}>
      <Text
        style={
          isSelected ? styles.bottomItemSelected : styles.bottomItemUnselected
        }>
        {currentItem}
      </Text>
    </Pressable>
  )
}
