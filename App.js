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
    <View style={{flex: 1, flexDirection:'row'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1, backgroundColor: 'pink', margin: 5}}></View>
        <View style={{flex: 2, backgroundColor: 'yellow', margin: 5}}></View>
        <View style={{flex: 3, backgroundColor: 'green', margin: 5}}></View>
      </View>

      <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'pink', margin: 5}}></View>
        <View style={{flex: 2, backgroundColor: 'yellow', margin: 5}}></View>
        <View style={{flex: 3, backgroundColor: 'green', margin: 5}}></View>
      </View>

    </View>
  );
} 

export default App;
