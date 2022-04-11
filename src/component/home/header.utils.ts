const currencySymbolMap = new Map([
  ['inr', '₹'],
  ['usdt', '₮'],
])
export function getCurrenySymbol(currency: string) {
  console.log('sdkljfal;f', currency)
  return currencySymbolMap.get(currency.toLowerCase())
}
