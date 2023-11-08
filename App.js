/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Text, View, ScrollView} from 'react-native';

import {
  MyTestComponent,
  MyTestFuncComponent,
  UserProfile,
} from './src/components';
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

  const inputStyle = {
    height: 40,
    backgroundColor: 'pink',
    margin: 10,
    padding: 5,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
      <View style={{width: 100, height: 200, backgroundColor: 'pink'}}></View>
      <View style={{width: 100, height: 200, backgroundColor: 'blue'}}></View>
      <View style={{width: 100, height: 200, backgroundColor: 'green'}}></View>
      <View style={{width: 100, height: 200, backgroundColor: 'purple'}}></View>
      <View style={{width: 100, height: 200, backgroundColor: 'orange'}}></View>

    </View>
  );
}

export default App;
