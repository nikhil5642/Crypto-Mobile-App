export interface BuyBottomSheetInterface {
  userId: string
  fundID: string
  amount: number
  amountText: string
  availableBalance: number
}

export type BuyBottomSheetParams = {
  userId: string
  fundID: string
}
