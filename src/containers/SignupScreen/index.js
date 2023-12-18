import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {request, success, failure, logout} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import ApiHelper from '../../helpers/ApiHelper';
import {kApiUserSignup} from '../../config/WebService';

export default function SignupScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState(undefined);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (user?.errorMessage?.message) {
      setErrorMsg(user?.errorMessage?.message);
    }
    else{
      setErrorMsg(undefined);
    }
  }, [user]);
  //const selector = useSelector();
  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        placeholder={'Enter email'}
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 5,
          height: 40,
        }}
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder={'Enter password'}
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 5,
          height: 40,
        }}
      />
      {errorMsg && errorMsg.length > 0 && <Text style={{color:'red', marginHorizontal:20}}>{errorMsg}</Text>}
      <Button
        title={'SignUp'}
        onPress={() => {
          dispatch(request({email, password}));
          ApiHelper.post(kApiUserSignup, {email, password})
            .then(response => {
              console.log('API Response:', response);
              dispatch(success(response));
             props.navigation.navigate('Login');
            })
            .catch(error => {
              dispatch(failure(error));
             // console.log(error);
            });
        }}
      />
      {user.isFetching && <ActivityIndicator />}
      <Button
        title={'Goto Login'}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </View>
  );
}
