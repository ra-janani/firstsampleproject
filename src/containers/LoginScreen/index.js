import {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../features/user/userSlice';

//import {PersistanceHelper} from '../../helpers';
//import { EventRegister } from 'react-native-event-listeners';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const user = useSelector(state => state.user.user);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      {isAuthenticated ? (
        <View>
          <Button
            title={'Logout'}
            onPress={() => {
              dispatch(logout());
            }}
          />
        </View>
      ) : (
        <View>
          <Text>UserName</Text>
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
              dispatch(login({username, password}));

              // Clear the input fields
              setUserName('');
              setPassword('');
              // PersistanceHelper.setObject('loginDetails', {username, password});
              // setUserName('');
              // setPassword('');
              // EventRegister.emit('loginEvent',true);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
