import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput} from 'react-native';

const TestContext5 = () => {
  console.log('TextContext5');
  const user = useContext(UserContext);
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 5</Text>
      <Text>{user}</Text>
    </View>
  );
};

export default TestContext5;
