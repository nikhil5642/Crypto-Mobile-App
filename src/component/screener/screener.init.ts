import {ScreenerInterface} from './screener.interface'

export const init = (): ScreenerInterface => ({
  data: [],
  userId: '',
  refreshing: false,
})
