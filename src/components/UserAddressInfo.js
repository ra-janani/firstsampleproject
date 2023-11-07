import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserAddressInfo = (props) => {
    const {inputStyle}=props;
    
  return(
    <View>
    <Text>User Address Info</Text>
    <TextInput value={props.street} onChangeText={()=>{}} placeholder='Street' style={inputStyle}/>
    <TextInput value={props.city} onChangeText={()=>{}} placeholder='City' style={inputStyle}/>
    <TextInput value={props.country} onChangeText={()=>{}} placeholder='Country' style={inputStyle}/>
    <TextInput value={props.postalCode} onChangeText={()=>{}} placeholder='Postal Code' style={inputStyle}/>
  </View>
  );
 
};
export default UserAddressInfo;
// Here I am getting only the necessary props that passed from the parent component which is UserProfile.js