import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'orange',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 0,
  },
  itemContainer: {
    flex: 1,
  },
  bottomItemSelected: {
    flex: 1,
    fontSize: 16,
    color: 'orange',
    borderColor: 'white',
    backgroundColor: 'white',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomItemUnselected: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    borderColor: 'white',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
