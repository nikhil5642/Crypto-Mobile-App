import {LoginScreenInterface} from './login-screen.interface'

export const init = (): LoginScreenInterface => ({
  sessionId: '',
  otp: '',
  mobileNumber: '',
  screen: 'mob',
  onBoarding: false,
  showLoader: false,
  timer: 0,
})
