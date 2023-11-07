import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserBasicInfo = (props) => {

const {inputStyle}=props;

  return (
    <View>
      <Text>UserBasicInfo</Text>
      <TextInput value={''} onChangeText={()=>{}} placeholder='First Name' style={inputStyle}/>
      <TextInput value={''} onChangeText={()=>{}} placeholder='Last Name'style={inputStyle}/>
    </View>
  );
};

export default UserBasicInfo;
