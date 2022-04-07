import * as React from 'react'

import {FlatList, View, Text, RefreshControl} from 'react-native'

import {accountBalance} from '../Balance/balance'
import Lifecycle from '../lifecycle'

import {styles} from './portfolio.style'
import {getRoundedAmount} from './portfolio.utils'

export const PortFolioView = ({e, m, p}) => {
  const portFolioItem = ({item}) => {
    return (
      <View style={styles.portFolioContainer}>
        <View>
          <Text style={styles.id}>{item.id.toUpperCase()}</Text>
          <Text style={styles.name}>{item.name.toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.price}> {getRoundedAmount(item.quantity)}</Text>
          <Text style={styles.value}>
            {(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
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
              <accountBalance.view
                e={e.of('accountBalance')}
                p={{userId: p.userId}}
                m={m.accountBalance}
              />
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
