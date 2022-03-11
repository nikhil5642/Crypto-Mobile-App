import {Dimensions, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  buySellContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  buyContainer: {
    width: SCREEN_WIDTH / 2,
    backgroundColor: 'blue',
    padding: 10,
  },
  buyText: {
    textAlign: 'center',
    color: 'white',
  },
  sellContainer: {
    width: SCREEN_WIDTH / 2,
    backgroundColor: 'red',
    padding: 10,
  },
  sellText: {
    textAlign: 'center',
    color: 'white',
  },
})
