import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserAddressInfo = (props) => {
    const {inputStyle}=props;
  return(
    <View>
    <Text>User Address Info</Text>
    <TextInput value={''} onChangeText={()=>{}} placeholder='Street' style={inputStyle}/>
    <TextInput value={''} onChangeText={()=>{}} placeholder='City' style={inputStyle}/>
    <TextInput value={''} onChangeText={()=>{}} placeholder='Country' style={inputStyle}/>
    <TextInput value={''} onChangeText={()=>{}} placeholder='Postal Code' style={inputStyle}/>
  </View>
  );
 
};
export default UserAddressInfo;
