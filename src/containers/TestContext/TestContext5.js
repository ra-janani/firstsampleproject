import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const TestContext5 = ({}) => {
  console.log('TextContext5');
  //const user = '';//useContext(UserContext);

  const {
    state: {username,isNotificationEnabled},
    actions: {setUsername,setIfNotifEnabled},
  } = useUserContext();

  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 5</Text>
      <Text>{username}</Text>
      <Button title={"Change name"} onPress={()=>{
        setUsername("santhosh");
      }}/>
       <Text>{isNotificationEnabled?"Enabled":"Disabled"}</Text>
    </View>
  );
};

export default TestContext5;
