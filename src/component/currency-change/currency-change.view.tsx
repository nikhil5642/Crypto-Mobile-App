import * as React from 'react'
import {FC} from 'react'

import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {CurrencyChangeInteface, CurrencyChangeParams} from './currency-change'

export const CurrencyChangeView: FC<
  Props<CurrencyChangeInteface, CurrencyChangeParams>
> = ({e, m, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <SafeAreaView style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>Choose Currency</Text>
          <Pressable style={style.closeContainer} onPress={e.of('close').emit}>
            <Image
              style={style.close}
              source={require('../../assets/close.png')}
            />
          </Pressable>
        </View>
        <FlatList
          data={m.fiatList}
          renderItem={(item) => (
            <Pressable
              onPress={() => {
                e.emit(item.item)
              }}>
              <View style={style.itemContainer}>
                <Text style={style.currencySymbol}>
                  {item.item.id.toUpperCase()}
                </Text>
                <Text style={style.currencyName}>{item.item.name}</Text>
                <View style={style.bottomDividor} />
                {item.item.id === m.selection && (
                  <Image
                    source={require('../../assets/check.png')}
                    style={style.tickMark}
                  />
                )}

                <View />
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </Lifecycle>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  closeContainer: {
    position: 'absolute',
    top: 8,
    right: 12,
  },
  close: {
    height: 24,
    width: 24,
  },
  tickMark: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: 18,
    right: 20,
  },
  currencySymbol: {
    fontSize: 16,
    color: 'black',
  },
  currencyName: {
    fontSize: 12,
    color: 'black',
  },
  itemContainer: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  bottomDividor: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 8,
  },
})
