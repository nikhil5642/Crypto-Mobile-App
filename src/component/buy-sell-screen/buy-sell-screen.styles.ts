import {Dimensions, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#1B1B1D',
  },

  warningText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 10,
    color: 'red',
  },

  textCurrencyInputContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  textCurrencyInput: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
  },
  textCurrencyDenoter: {
    flex: 1,
    fontSize: 14,
    fontColor: 'grey',
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingBottom: 2,
  },

  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginHorizontal: 8,
  },
  buttonContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },

  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
