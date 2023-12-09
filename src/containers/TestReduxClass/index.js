import React from 'react';
import {View,Button, FlatList, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from '../../features/counter/counterSlice';

import {addCart,removeCart,clearCart} from "../../features/cart/cartSlice";

const itemList = [
  {name: 'Mac book', details: 'Pro', price: 1000},
  {name: 'Honor phone', details: '8x', price: 250},
  {name: 'Google pixel', details: '6a', price: 300},
  {name: 'Lenovo laptop', details: 'yoga', price: 750},
  {name: 'One plus phone', details: '7t', price: 400},
];

class TestReduxClass extends React.Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={itemList}
          renderItem={({item, index}) => {
            return (
              <View style={{backgroundColor: 'yellow', margin: 10}}>
                <Text>Name: {item.name}</Text>
                <Text>Details: {item.details}</Text>
                <Text>Price: {item.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    // dispatch(addCart(item));
                    this.props.addCart(item);
                  }}>
                  <Text>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    //dispatch(removeCart(item));
                    this.props.removeCart(item);
                  }}>
                  <Text>Remove from Cart</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <TouchableOpacity
          onPress={() => {
            // dispatch(clearCart());
            this.props.clearCart();
          }}>
          <Text>Clear Cart</Text>
        </TouchableOpacity>

        <Text>Test Redux screen</Text>
        {/* <Text>{counter}</Text> */}
        <Text>{this.props.counter.value}</Text>
        <Button
          title={'Increment'}
          onPress={() => {
            //dispatch(increment());
            this.props.increment()
          }}
        />
        <Button
          title={'Decrement'}
          onPress={() => {
           // dispatch(decrement());
           this.props.decrement();
          }}
        />
        <Button
          title={'Increment by amount'}
          onPress={() => {
            //dispatch(incrementByAmount(5));
            this.props.incrementByAmount(10);
          }}
        />
        <Button
          title={'Decrement by amount'}
          onPress={() => {
            // dispatch(decrementByAmount(3));
            this.props.decrementByAmount(10);
          }}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  // anything we need to get from redux we can put here. similar to setters
  counter: state.counter,
});

const actions = {increment, decrement, incrementByAmount, decrementByAmount,addCart,removeCart,clearCart}; // dispatching actions
export default connect(mapStateToProps, actions)(TestReduxClass); // connect means connecting these two things with the component.
