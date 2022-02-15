export function getRoundedAmount(amount: number) {
  return Math.round((amount + Number.EPSILON) * 1000000) / 1000000
}
