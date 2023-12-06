import {} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text,Button} from 'react-native';
import {increment,decrement,incrementByAmount,decrementByAmount} from "../../features/counter/counterSlice"

const TestReduxScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  return (
    <View>
      <Text>Test Redux screen</Text>
      <Text>{counter}</Text>
      <Button title={"Increment"} onPress={()=>{
        dispatch(increment());
      }}/>
      <Button title={"Decrement"} onPress={()=>{
        dispatch(decrement());
      }}/>
      <Button title={"Increment by amount"} onPress={()=>{
        dispatch(incrementByAmount(5));
      }}/>
       <Button title={"Decrement by amount"} onPress={()=>{
        dispatch(decrementByAmount(3));
      }}/>
    </View>
  );
};

export default TestReduxScreen;
