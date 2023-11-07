import React from 'react';
import {View, Text} from 'react-native';
import UserBasicInfo from './UserBasicInfo';
import UserAddressInfo from './UserAddressInfo';
import UserContactInfo from './UserContactInfo';

const UserProfile = (props) => {

const {inputStyle}=props;

  return (
    <View>
      <Text>UserProfile</Text>
      <UserBasicInfo inputStyle={inputStyle}/>
      <UserContactInfo inputStyle={inputStyle}/>
      <UserAddressInfo inputStyle={inputStyle}/>
    </View>
  );
};

export default UserProfile;
