import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserContactInfo = props => {
  const {userData} = props;
  return (
    <View>
      <Text>User Contact Info</Text>
      <TextInput
        value={userData.email}
        onChangeText={() => {}}
        placeholder="EMail"
        style={props.inputStyle}
      />
      <TextInput
        value={userData.phone}
        onChangeText={() => {}}
        placeholder="Phone Number"
        style={props.inputStyle}
      />
    </View>
  );
};

export default UserContactInfo;

// Here I destrucutured only the userData prop and not the inputstyle prop. so i am using props.inputstyle