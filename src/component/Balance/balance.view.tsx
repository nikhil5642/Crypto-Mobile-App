import * as React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {styles} from './balance.style';
import {Text} from 'react-native';
import {getCurrentBalance, setCurrentBalance} from './balance.utils';

const GIVEN_BALANCE_LIMIT = 100000;
export const AccountBalance = () => {
  const [balance, setBalance] = useState(-1);
  if (balance === -1) {
    getCurrentBalance().then(bal => {
      if (bal) {
        setBalance(parseInt(bal));
      } else {
        setCurrentBalance(GIVEN_BALANCE_LIMIT);
        setBalance(GIVEN_BALANCE_LIMIT);
      }
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.balanceTitle}>Current Balance: </Text>
      <Text style={styles.balanceText}>Rs. {balance.toLocaleString()} </Text>
    </View>
  );
};
