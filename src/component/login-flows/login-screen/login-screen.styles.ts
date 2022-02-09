import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
  },
  textInput: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#E3E2E6',
    color: '#1B1B1D',
    borderBottomWidth: 0.5,
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
