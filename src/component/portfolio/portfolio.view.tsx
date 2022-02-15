import * as React from 'react'

import {FlatList, View, Text, Pressable} from 'react-native'

import Lifecycle from '../lifecycle'

import {styles} from './portfolio.style'
import {getRoundedAmount} from './portfolio.utils'

export const PortFolioView = ({e, m, p}) => {
  const portFolioItem = ({item}) => {
    return (
      <View style={styles.portFolioContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}> {getRoundedAmount(item.value)}</Text>
      </View>
    )
  }

  const recentTransactionItem = ({item}) => {
    console.log(item)
    return (
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionType}>
          {item.transactionActionType === 'buy' ? 'BUY' : 'SELL'}
        </Text>
        <Text style={styles.tranactionFrom}>
          From: {getRoundedAmount(item.fromAmount)} {item.fromCurrency}
        </Text>
        <Text style={styles.tranactionTo}>
          To: {getRoundedAmount(item.toAmount)} {item.toCurrency}
        </Text>
      </View>
    )
  }
  console.log('PortFolioView', m.recentTransactions)
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textAccountBalance}>
            {m.portfolio.length > 0 ? 'Account Balances' : ''}
          </Text>
          <FlatList
            data={m.portfolio}
            renderItem={portFolioItem}
            keyExtractor={(item) => item.id}
          />
          <Text style={styles.textRecentTransactions}>
            {m.recentTransactions.length > 0 ? 'Recent Transactions' : ''}
          </Text>
          <FlatList
            data={m.recentTransactions}
            renderItem={recentTransactionItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </Lifecycle>
  )
}
