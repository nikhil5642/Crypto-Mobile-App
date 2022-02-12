import {StyleSheet} from 'react-native'

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

  textCurrencyInputContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  textCurrencyInput: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
  },
  textCurrencyDonoter: {
    flex: 1,
    fontSize: 14,
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
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
})
