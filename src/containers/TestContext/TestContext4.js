import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput} from 'react-native';
import TestContext5 from './TestContext5';

const TestContext4 = () => {
  console.log('TextContext4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Component 4</Text>
      <TestContext5 />
    </View>
  );
};

export default TestContext4;
