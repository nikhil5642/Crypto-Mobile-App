import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  tagContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 16,
    marginRight: 16,
  },
  rowContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tickerId: {
    fontSize: 10,
    fontWeight: '400',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
  },
  percentageChangePositive: {
    alignSelf: 'flex-end',
    color: 'green',
  },
  percentageChangeNegative: {
    alignSelf: 'flex-end',
    color: 'red',
  },
})
