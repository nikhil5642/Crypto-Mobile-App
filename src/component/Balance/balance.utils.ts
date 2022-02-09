import DefaultPreference from 'react-native-default-preference';

const balanceTag = 'currentBalance';
export function getCurrentBalance() {
  return DefaultPreference.get(balanceTag);
}

export function setCurrentBalance(newBalance: number) {
  DefaultPreference.set(balanceTag, newBalance.toString());
}
