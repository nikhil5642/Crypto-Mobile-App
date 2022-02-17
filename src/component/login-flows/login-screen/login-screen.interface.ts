export interface LoginScreenInterface {
  sessionId: string
  otp: string
  mobileNumber: string
  screen: 'mob' | 'otp'
}

export type LoginScreenParams = Record<string, unknown>
