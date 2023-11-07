import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UserBasicInfo from './UserBasicInfo';
import UserAddressInfo from './UserAddressInfo';
import UserContactInfo from './UserContactInfo';

const UserProfile = props => {

  const [backgroundColor, setBackgroundColor]=useState('yellow');
  const {inputStyle, userData} = props;
  const {firstName, lastName, email, phone, street, city, country, postalCode} =
    userData;
  return (
    <View>
      <Text>UserProfile</Text>
      <UserBasicInfo
        inputStyle={inputStyle}
        firstName={firstName}
        lastName={lastName}
        bgColor={backgroundColor}
        colorChangeCB={(requestedColor)=>{
          setBackgroundColor(requestedColor)
        }}
      />
      <UserContactInfo inputStyle={inputStyle} email={email} phone={phone} />
      <UserAddressInfo
        inputStyle={inputStyle}
        street={street}
        city={city}
        country={country}
        postalCode={postalCode}
      />
      <TouchableOpacity onPress={()=>{
        setBackgroundColor('red')
      }}>
<Text>Submit Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

// // Here I am passing only the necessary props to all the child components
