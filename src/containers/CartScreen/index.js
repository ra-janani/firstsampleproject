import {} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, Button} from 'react-native';
import {addCart, removeCart} from '../../features/cart/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <View>
      <Text>Cart screen</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  backgroundColor: 'pink',
                  marginHorizontal: 10,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text>{item.item.name}</Text>
                    <Text>{item.item.details}</Text>
                  </View>
                  <View>
                    <Text>{item.item.price}</Text>
                    <Text>{item.quantity}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Button
                      title={'+'}
                      onPress={() => {
                        dispatch(addCart(item.item));
                      }}
                    />
                    <Button
                      title={'-'}
                      onPress={() => {
                        dispatch(removeCart(item.item));
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CartScreen;
