export interface BuyBottomSheetInterface {
  userId: string
  fundID: string
  amount: number
  amountText: string
  availableBalance: number
  visible: boolean
}

export type BuyBottomSheetParams = {
  userId: string
  fundID: string
}
