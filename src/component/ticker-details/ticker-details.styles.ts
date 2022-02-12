import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buySellContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buyContainer: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
  buyText: {
    textAlign: 'center',
    color: 'white',
  },
  sellContainer: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  sellText: {
    textAlign: 'center',
    color: 'white',
  },
})
