import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
  },
  itemContainerSelected: {
    flex: 1,
    borderTopWidth: 1,
    backgroundColor: 'white',
    borderColor: '#686000',
    justifyContent: 'center',
  },
  itemContainerUnselected: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#686000',
    justifyContent: 'center',
    backgroundColor: '#686000',
  },

  bottomItemSelected: {
    fontSize: 16,
    color: '#686000',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomItemUnselected: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
