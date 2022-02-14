import * as React from 'react'
import {FC} from 'react'

import {Image, Pressable, StyleSheet, Text, View} from 'react-native'

import {Props} from '../../core/component'
import Lifecycle from '../lifecycle'

import {
  TransactionStatusInterFace,
  TransactionStatusParms,
} from './transaction-status'

export const TransactionStatusView: FC<
  Props<TransactionStatusInterFace, TransactionStatusParms>
> = ({e, p}) => {
  return (
    <Lifecycle onMount={() => e.of('mount').emit(p)}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            p.status === 'success'
              ? require('../../assets/check.png')
              : require('../../assets/close.png')
          }
          resizeMode={'center'}
        />
        <Text style={styles.text}>
          {p.status === 'success'
            ? 'Transaction Successful'
            : 'Transaction Failed'}
        </Text>
        {p.status === 'success' ? (
          <Text style={styles.textTransationId}>
            {'Transaction ID: ' + p.transactionId}
          </Text>
        ) : null}
        <Pressable
          style={styles.buttonContainer}
          onPress={() => e.of('done').emit({})}>
          <Text style={styles.button}>Done</Text>
        </Pressable>
      </View>
    </Lifecycle>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '60%',
    height: undefined,
    overflow: 'hidden',
    aspectRatio: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  textTransationId: {
    fontSize: 12,
    marginTop: 10,
  },
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#686000',
    borderColor: '#686000',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    fontWeight: '600',
    color: 'white',
  },
})
