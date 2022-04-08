import {Dimensions, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textInputContainer: {
    marginHorizontal: 12,
    textAlign: 'left',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
  },

  textInput: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
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

  textCurrencyDenoter: {
    flex: 1,
    fontSize: 14,
    fontColor: 'grey',
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingBottom: 2,
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
