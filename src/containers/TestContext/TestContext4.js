import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput} from 'react-native';
import TestContext5 from './TestContext5';
import {useUserContext} from '../../contexts/UserContext'

const TestContext4 = () => {
  console.log('TextContext4');
  const {
    state: {data},
    actions: {setData},
  } = useUserContext();
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Component 4</Text>
      <Text>{data}</Text>
      <TestContext5 />
    </View>
  );
};

export default TestContext4;
