import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTotalPorfolioValue: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
    marginHorizontal: 32,
    marginVertical: 16,
    flexDirection: 'column',
  },

  textTotalPorfolioValue: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'grey',
  },

  totalPorfolioValue: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    marginVertical: 4,
  },
  textAccountBalance: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },

  portFolioContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    color: 'black',
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 16,
    color: 'grey',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    color: 'green',
    textAlign: 'right',
  },
  value: {
    marginRight: 16,
    color: 'black',
    textAlign: 'right',
  },
  bottomLine: {
    width: 1,
    backgroundColor: 'grey',
  },

  textRecentTransactions: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },

  transactionsContainer: {
    height: 90,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  transactionType: {
    fontWeight: '800',
    fontSize: 14,
    paddingBottom: 5,
    paddingLeft: 2,
  },
  tranactionFrom: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
    color: 'grey',
  },
  tranactionTo: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
    color: 'grey',
  },
})
