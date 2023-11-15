import {useState} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import { EventRegister } from 'react-native-event-listeners';
const LoginScreen = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Text style={{margintop: 10}}>Login</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          height: 40,
          margin: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}
        value={username}
        onChangeText={ct => {
          setUserName(ct);
        }}
        placeholder={'enter the username'}
      />
 
      <Text>Password</Text>
      <TextInput
        secureTextEntry
        style={{
          backgroundColor: 'white',
          height: 40,
          margin: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder={'enter the password'}
      />

      <Button
        title={'Login'}
        onPress={() => {
          PersistanceHelper.setObject('loginDetails', {username, password});
          setUserName('');
          setPassword('');
          EventRegister.emit('loginEvent',true);
        }}
      />
    </View>
  );
};

export default LoginScreen;
