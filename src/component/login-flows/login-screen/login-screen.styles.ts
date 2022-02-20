import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
  },
  welcomeText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    padding: 20,
  },

  otpViewContianer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  mobileNumberText: {
    marginTop: 4,
    color: 'black',
    fontWeight: '600',
    marginBottom: 16,
  },

  otpContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  otpText: {
    backgroundColor: 'rgba(68, 60, 00, 0.4)',
    borderRadius: 8,
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  otpPageBottomTextContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  resendOTP: {
    fontWeight: '600',
    color: '#005282',
    textDecorationLine: 'underline',
  },

  textInput: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#E3E2E6',
    color: '#1B1B1D',
    borderRadius: 12,
    paddingLeft: 12,
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
