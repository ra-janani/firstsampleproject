import {} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from '../../features/counter/counterSlice';
import { addCart,removeCart,clearCart } from '../../features/cart/cartSlice';

const itemList = [
  {name: 'Mac book', details: 'Pro', price: 1000},
  {name: 'Honor phone', details: '8x', price: 250},
  {name: 'Google pixel', details: '6a', price: 300},
  {name: 'Lenovo laptop', details: 'yoga', price: 750},
  {name: 'One plus phone', details: '7t', price: 400},
];

const TestReduxScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  return (
    <View>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View style={{backgroundColor: 'yellow', margin: 10}}>
              <Text>Name: {item.name}</Text>
              <Text>Details: {item.details}</Text>
              <Text>Price: {item.price}</Text>
              <TouchableOpacity onPress={() => {
                dispatch(addCart(item));
              }}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                dispatch(removeCart(item));
              }}>
                <Text>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
       <TouchableOpacity onPress={() => {
                dispatch(clearCart());
              }}>
                <Text>Clear Cart</Text>
              </TouchableOpacity>

      <Text>Test Redux screen</Text>
      <Text>{counter}</Text>
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Button
        title={'Increment by amount'}
        onPress={() => {
          dispatch(incrementByAmount(5));
        }}
      />
      <Button
        title={'Decrement by amount'}
        onPress={() => {
          dispatch(decrementByAmount(3));
        }}
      />
    </View>
  );
};

export default TestReduxScreen;
