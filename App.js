/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from './src/navigator';

import {Text, View, Button} from 'react-native';
import CarDetailsForm from './src/containers/CarDetailsForm';
import CarDetailScreen from './src/containers';
import {SafeAreaView} from 'react-native-safe-area-context';
import store from './src/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
