import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const UserBasicInfo = props => {
  const [pass, setPass] = useState('');
  const [vpass, setVpass] = useState('');

  const {inputStyle, bgColor, colorChangeCB} = props;

  return (
    <View style={{backgroundColor: bgColor}}>
      <Text>UserBasicInfo</Text>
      <TextInput
        value={props.firstName}
        onChangeText={() => {}}
        placeholder="First Name"
        style={inputStyle}
      />
      <TextInput
        value={props.lastName}
        onChangeText={() => {}}
        placeholder="Last Name"
        style={inputStyle}
      />
      <TextInput
        value={pass}
        onChangeText={changedText => {
          setPass(changedText);
        }}
        placeholder="Password"
        style={inputStyle}
        secureTextEntry></TextInput>
      {pass != vpass && <Text>Password doesnot match</Text>}
     


      <TextInput
        value={vpass}
        onChangeText={changedText => {
          setVpass(changedText);
        }}
        placeholder="Retype Password"
        style={inputStyle}
        secureTextEntry></TextInput>
      <TouchableOpacity
        onPress={() => {
          colorChangeCB('blue');
        }}>
        <Text style={{fontSize: 20}}>User Info Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserBasicInfo;
// Here I am getting only the necessary props that passed from the parent component which is UserProfile.js
// {true && <Text>Password doesnot match</Text>}