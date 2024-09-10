import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { decrement, increment, incrementBy } from './counterSlice'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState<number>(0)

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
      </Pressable>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeholder='Enter increment amount'
        value={amount.toString()}
        onChangeText={text => setAmount(parseInt(text))} />
      <Pressable
        style={styles.button}
        onPress={() => dispatch(incrementBy(amount))}>
          <Text>Increment By</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#c0c0c0',
    height: 40,
    width: '40%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#c0c0c0',
    height: 40,
    width: '50%',
    paddingLeft: 5,
    margin: 10
  }
})

export default Counter