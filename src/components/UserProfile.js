import React from 'react';
import {View, Text} from 'react-native';
import UserBasicInfo from './UserBasicInfo';
import UserAddressInfo from './UserAddressInfo';
import UserContactInfo from './UserContactInfo';

const UserProfile = props => {
  return (
    <View>
      <Text>UserProfile</Text>
      <UserBasicInfo {...props} />
      <UserContactInfo {...props} />
      <UserAddressInfo {...props} />
    </View>
  );
};

export default UserProfile;
