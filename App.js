/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoardScreen, Settings} from './src/containers';
import {Text, View, Button} from 'react-native';

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
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          title={'Home'}
        />
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
