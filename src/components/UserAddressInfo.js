import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserAddressInfo = (props) => {
    const {userData,inputStyle}=props;
    const {street,city,country,postalCode} = userData;
  return(
    <View>
    <Text>User Address Info</Text>
    <TextInput value={street} onChangeText={()=>{}} placeholder='Street' style={inputStyle}/>
    <TextInput value={city} onChangeText={()=>{}} placeholder='City' style={inputStyle}/>
    <TextInput value={country} onChangeText={()=>{}} placeholder='Country' style={inputStyle}/>
    <TextInput value={postalCode} onChangeText={()=>{}} placeholder='Postal Code' style={inputStyle}/>
  </View>
  );
 
};
export default UserAddressInfo;
//here I further destructured the userData object