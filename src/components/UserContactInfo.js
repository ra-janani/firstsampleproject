import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserContactInfo = (props) => {
    const {inputStyle}=props;
  return (
    <View>
      <Text>User Contact Info</Text>
      <TextInput value={''} onChangeText={()=>{}} placeholder='EMail' style={inputStyle}/>
      <TextInput value={''} onChangeText={()=>{}} placeholder='Phone Number' style={inputStyle}/>
    </View>
  );
};

export default UserContactInfo;
