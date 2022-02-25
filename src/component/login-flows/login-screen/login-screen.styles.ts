import {Platform, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, .2)',
    zIndex: 10,
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
    width: 24,
    height: 40,
    color: 'black',
  },
  otpPageBottomTextContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  resendOTP: {
    fontWeight: '600',
    color: '#005282',
  },

  textInput: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#E3E2E6',
    color: '#1B1B1D',
    borderRadius: 12,
    paddingLeft: 12,
    paddingVertical: Platform.select({
      ios: 12,
    }),
  },
  button: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: 16,
    marginBottom: 16,
  },
})
