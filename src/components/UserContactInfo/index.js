import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserContactInfo = props => {
  const {inputStyle} = props;
  return (
    <View>
      <Text>User Contact Info</Text>
      <TextInput
        value={props.email}
        onChangeText={() => {}}
        placeholder="EMail"
        style={inputStyle}
      />
      <TextInput
        value={props.phone}
        onChangeText={() => {}}
        placeholder="Phone Number"
        style={inputStyle}
      />
    </View>
  );
};

export default UserContactInfo;

// Here I am getting only the necessary props that passed from the parent component which is UserProfile.js