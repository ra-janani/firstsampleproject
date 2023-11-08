/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Text, View, Button,ScrollView, TouchableOpacity} from 'react-native';

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
      }}>
      <View style={{flex: 1, margin: 10, backgroundColor: 'pink', justifyContent:'center',alignItems:'center'}}>
        <Text>First Box</Text>
      </View>
      <View style={{flex: 1, margin: 10, backgroundColor: 'lightblue',justifyContent:'center',alignItems:'center'}}>
        <Text style={{position:'absolute', bottom:10}}>Second Box</Text>
        <TouchableOpacity style={{ position:'absolute',bottom:10, right:10 }} >
          <Text>Test Button</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, margin: 10, backgroundColor: 'lightgreen',justifyContent:'center',alignItems:'center'}}>
        <Text>Third Box</Text>
      </View>
      <TouchableOpacity style={{ position:'absolute',bottom:10, right:10 }} >
          <Text>For Outer view Button</Text>
        </TouchableOpacity>
    </View>
  );
}

export default App;
