export interface LoginScreenInterface {
  sessionId: string
  otp: string
  mobileNumber: string
  screen: 'mob' | 'otp'
  onBoarding: boolean
}

export type LoginScreenParams = Record<string, unknown>
