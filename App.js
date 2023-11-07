/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Text, View, ScrollView} from 'react-native';
import UserProfile from './src/components/UserProfile';

function App() {
  const userObject = {
    firstName: 'Janani',
    lastName: 'Rajendran',
    phone: '07919849860',
    email: 'ra.janani@yahoo.co.in',
    city: 'London',
    country: 'England',
    street: 'Thurston Road',
    postalCode: 'SE137SL',
  };

  const inputStyle={
    height:40,
    backgroundColor:'pink',
    margin:10,
    padding:5
  };

  return (
    <View style={{flex: 1, margin: 40}}>
      <ScrollView>
        <UserProfile userData={userObject} inputStyle={inputStyle}/>
      </ScrollView>
    </View>
  );
}

export default App;
