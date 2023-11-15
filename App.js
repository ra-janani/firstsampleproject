/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashBoardScreen,
  Settings,
  HookEffectScreen,
  Test,
  TestClassComp,
} from './src/containers';
import {Text, View, Button} from 'react-native';
import {PersistanceHelper} from "./src/helpers";
import CarDetailsForm from './src/containers/CarDetailsForm';
import CarDetailScreen from './src/containers';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  useEffect(()=>{
   PersistanceHelper.setValue('myFirstKey','Hey!! is this value is stored?')
  },[]);
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={() => (
            <View>
              <Text>Login screen</Text>
            </View>
          )}
        />
        <Stack.Screen
          name="Sign up"
          component={() => (
            <View>
              <Text>SignUp screen</Text>
            </View>
          )}
        />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name={'TestClassComp'}
          component={TestClassComp}
          title={'TestClassComp'}
        />
        <Stack.Screen
          name={'HookEffectScreen'}
          component={HookEffectScreen}
          title={'HookEffectScreen'}
        />

        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          title={'DashBoardScreen'}
        />

        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          title={'Home'}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          title={'Settings'}
          initialParams={{city: 'CMBT', country: 'INDIA'}}
        />
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLoggedIn ? getMainStack() : getAuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
