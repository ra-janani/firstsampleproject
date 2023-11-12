/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoardScreen, Settings, HookEffectScreen} from './src/containers';
import {Text, View, Button} from 'react-native';
import CarDetailsForm from './src/containers/CarDetailsForm';
import CarDetailScreen from './src/containers';

const Stack = createNativeStackNavigator();

const HomeScreen = props => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text>This is home screen</Text>
      <Button
        title={'Go to DashBoardScreen'}
        onPress={() => {
          props.navigation.navigate('DashBoard');
        }}
      />

      {/* <Button
        title={'Go to CarDetailsForm'}
        onPress={() => {
          props.navigation.navigate('CarDetailsForm');
        }}
      /> */}
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HookEffectScreen'}
          component={HookEffectScreen}
          title={'HookEffectScreen'}
        />
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          title={'Home'}
        />

        {/* <Stack.Screen
          name={'CarDetailsForm'}
          component={CarDetailsForm}
          title={'CarDetailsForm'}
        />
        <Stack.Screen
          name={'CarDetailScreen'}
          component={CarDetailScreen}
          title={'CarDetailScreen'}
        /> */}

        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          title={'DashBoardScreen'}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          title={'Settings'}
          initialParams={{city: 'CMBT', country: 'INDIA'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
