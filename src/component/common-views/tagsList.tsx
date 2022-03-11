import React from 'react'

import {StyleSheet, View, Text} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'

export const TagListItemView = ({data}) => {
  const tags = getFeatureTags(data.tags)
  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        horizontal
        renderItem={(item) => getTagItem(item.item)}
        keyExtractor={(_, index) => {
          return index.toString()
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

function getTagItem(item: any) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  )
}

const TAGS_DESCRIPTION = {
  payments: {name: 'Payment'},
  defi: {
    name: 'Decentralised Finance',
  },
  'smart-contracts': {
    name: 'Smart Contracts',
  },
  web3: {name: 'Web 3.0'},
  dao: {
    name: 'Decentralised Autonomous Applications',
  },
  research: {
    name: 'Used in Reasearch',
  },
  stablecoin: {
    name: 'Stable Coin',
  },
  mineable: {
    name: 'Mineable',
  },
  'sha-256': {
    name: 'SHA 256',
  },
  memes: {name: 'Meme token'},
}

export const getFeatureTags = (tags: string[]) => {
  const tagList: any[] = []
  for (const tag of tags) {
    const val = TAGS_DESCRIPTION[tag]
    val !== undefined
      ? tagList.push(val)
      : tag.includes('portfolio')
      ? tagList.push({name: capitalizeWords(tag.split('-').join(' '))})
      : null
  }
  return tagList
}

function capitalizeWords(text) {
  return text.replace(/(?:^|\s)\S/g, (res) => {
    return res.toUpperCase()
  })
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: 'lightgrey',
    marginLeft: 8,
  },
  itemImage: {
    color: 'black',
  },
  itemText: {
    color: 'black',
  },
})
