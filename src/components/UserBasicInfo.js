import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserBasicInfo = (props) => {

const {userData,inputStyle}=props;

  return (
    <View>
      <Text>UserBasicInfo</Text>
      <TextInput value={userData.firstName} onChangeText={()=>{}} placeholder='First Name' style={inputStyle}/>
      <TextInput value={userData.lastName} onChangeText={()=>{}} placeholder='Last Name'style={inputStyle}/>
    </View>
  );
};

export default UserBasicInfo;
// here destructured 2 props userData and inputStyle from props.