import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserBasicInfo = (props) => {

const {inputStyle}=props;

  return (
    <View>
      <Text>UserBasicInfo</Text>
      <TextInput value={props.firstName} onChangeText={()=>{}} placeholder='First Name' style={inputStyle}/>
      <TextInput value={props.lastName} onChangeText={()=>{}} placeholder='Last Name'style={inputStyle}/>
    </View>
  );
};

export default UserBasicInfo;
// Here I am getting only the necessary props that passed from the parent component which is UserProfile.js