/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

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
      }}>
      <SafeAreaView>
      
        <FlatList
          data={[
            {
              title: 'London',
            },
            {
              title: 'Cardiff',
            },
            {
              title: 'Delhi',
            },
            {
              title: 'Chennai',
            },
          ]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 80,
                  backgroundColor: 'yellow',
                  marginVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
                  }}
                />
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

export default App;
