import * as React from 'react'

import {
  FlatList,
  View,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native'

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
    return (
      <View style={styles.transactionsContainer}>
        <Text
          style={[
            styles.transactionType,
            {color: item.transactionActionType === 'buy' ? 'green' : 'red'},
          ]}>
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
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <FlatList
          data={m.portfolio}
          renderItem={portFolioItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View>
              <View style={styles.containerTotalPorfolioValue}>
                <Text style={styles.totalPorfolioValue}>
                  {m.totalPortfolioValue.toLocaleString()}
                </Text>
                <Text style={styles.textTotalPorfolioValue}>
                  Total Portfolio Value
                </Text>
              </View>

              <Text style={styles.textAccountBalance}>
                {m.portfolio.length > 0 ? 'Account Balances' : ''}
              </Text>
            </View>
          }
          ListFooterComponent={
            <View>
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
          }
          refreshControl={
            <RefreshControl
              refreshing={m.refreshing}
              onRefresh={() => e.of('mount').emit(p)}
            />
          }
        />
      </View>
    </Lifecycle>
  )
}
