import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  rowContainer: {
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
    // color: 'white',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 16,
    // color: 'white',
    color: 'green',
  },
  bottomLine: {
    width: 1,
    backgroundColor: 'grey',
  },
})
