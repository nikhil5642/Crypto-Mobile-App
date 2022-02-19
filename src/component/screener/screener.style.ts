import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },

  riskTagcontainer: {
    alignSelf: 'center',
  },

  riskTag: {
    fontSize: 8,
    fontWeight: '600',
    color: 'black',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginVertical: 1,
    borderRadius: 16,
  },
  featureTagsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  featureTag: {
    marginTop: 4,
    marginHorizontal: 4,
    height: 16,
    width: 16,
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
    alignSelf: 'flex-end',
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
