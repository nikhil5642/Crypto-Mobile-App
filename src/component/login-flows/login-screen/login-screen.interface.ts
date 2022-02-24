export interface LoginScreenInterface {
  sessionId: string
  otp: string
  mobileNumber: string
  screen: 'mob' | 'otp'
  onBoarding: boolean
  showLoader: boolean
  timer: number
}

export type LoginScreenParams = Record<string, unknown>
