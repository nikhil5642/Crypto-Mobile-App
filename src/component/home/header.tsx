import React from 'react'

import {StyleSheet, View, Image, Pressable, Text} from 'react-native'

import {getCurrenySymbol} from './header.utils'

export const Header = ({e, m}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.userIcon}
          source={require('../../assets/ic_user.png')}
        />
      </Pressable>
      <Image
        style={styles.logo}
        source={require('../../assets/ic_logo_no_background.png')}
      />
      <Pressable onPress={e.of('changeCurrency').emit}>
        <Text style={styles.currencySymbol}>
          {getCurrenySymbol(m.baseCurrency.id ?? 'usdt')}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userIcon: {
    aspectRatio: 1,
    height: 24,
    width: 24,
  },
  logo: {
    flex: 1,
    height: 32,
    width: 96,
    resizeMode: 'center',
  },
  currencySymbol: {
    fontSize: 20,
  },
})
