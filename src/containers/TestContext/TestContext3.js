import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import TestContext4 from './TestContext4';
import {useUserContext} from '../../contexts/UserContext'

const TestContext3 = () => {
  console.log('TextContext3');
  const {
  
    actions: {setIfNotifEnabled},
  } = useUserContext();
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 3</Text>
      <Button title="Disable notif from comp 3" onPress={()=>{
        setIfNotifEnabled(false);
      }}/>
      <TestContext4 />
    </View>
  );
};

export default TestContext3;
