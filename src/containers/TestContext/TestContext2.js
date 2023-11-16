import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput} from 'react-native';
import TestContext3 from './TestContext3';

const TestContext2 = () => {
  console.log('TextContext2');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>Component 2</Text>
      <TestContext3 />
    </View>
  );
};

export default TestContext2;
