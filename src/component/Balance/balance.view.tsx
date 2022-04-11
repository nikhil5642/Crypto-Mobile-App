import * as React from 'react'
import {FC} from 'react'

import {View} from 'react-native'
import {Text} from 'react-native'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {BalanceInterface, BalanceParams} from './balance'
import {styles} from './balance.style'

export const AccountBalanceView: FC<Props<BalanceInterface, BalanceParams>> = ({
  e,
  m,
  p,
}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <Text style={styles.balanceTitle}>Remaining Balance: </Text>
        <Text style={styles.balanceText}>
          {p.baseCurrency.template.replace(
            '%s',
            (m.balance * p.baseCurrency.price).toLocaleString(),
          )}
        </Text>
      </View>
    </Lifecycle>
  )
}
