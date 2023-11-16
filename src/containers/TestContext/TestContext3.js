import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput} from 'react-native';
import TestContext4 from './TestContext4';

const TestContext3 = () => {
  console.log('TextContext3');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 3</Text>
      <TestContext4 />
    </View>
  );
};

export default TestContext3;
