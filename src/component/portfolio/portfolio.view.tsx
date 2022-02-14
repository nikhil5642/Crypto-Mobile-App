import * as React from 'react'

import {FlatList, View, Text, Pressable} from 'react-native'

import Lifecycle from '../lifecycle'

import {styles} from './portfolio.style'

export const PortFolioView = ({e, m, p}) => {
  const portFolioItem = ({item}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}> {item.value}</Text>
      </View>
    )
  }
  console.log('PortFolioView', m.data)
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <FlatList
          data={m.data}
          renderItem={portFolioItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Lifecycle>
  )
}
