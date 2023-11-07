import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const UserBasicInfo = (props) => {

const {inputStyle,bgColor,colorChangeCB}=props;

  return (
    <View style={{backgroundColor:bgColor}}>
      <Text>UserBasicInfo</Text>
      <TextInput value={props.firstName} onChangeText={()=>{}} placeholder='First Name' style={inputStyle}/>
      <TextInput value={props.lastName} onChangeText={()=>{}} placeholder='Last Name'style={inputStyle}/>
      <TouchableOpacity onPress={()=>{
        colorChangeCB('blue');
      }}><Text style={{fontSize:20}}>User Info Button</Text></TouchableOpacity>
    
    </View>
  );
};

export default UserBasicInfo;
// Here I am getting only the necessary props that passed from the parent component which is UserProfile.js