import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    color: 'green',
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
    color: 'green',
    fontWeight: '800',
    fontSize: 16,
    paddingBottom: 5,
    paddingLeft: 2,
  },
  tranactionFrom: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
  },
  tranactionTo: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
  },
})
