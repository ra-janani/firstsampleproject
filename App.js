/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import {
  DashBoardScreen,
  Settings,
  HookEffectScreen,
  Test,
  TestClassComp,
  TestContext,
  LoginScreen,
  TestUseRef,
  TestApiScreen,
} from './src/containers';
import {Text, View, Button} from 'react-native';
import {PersistanceHelper} from './src/helpers';
import CarDetailsForm from './src/containers/CarDetailsForm';
import CarDetailScreen from './src/containers';
import {SafeAreaView} from 'react-native-safe-area-context';
import store from './src/store';
import {Provider} from 'react-redux';

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    EventRegister.addEventListener('loginEvent', data => {
      setIsUserLoggedIn(data);
    });

    //PersistanceHelper.setValue('myFirstKey','Hey!! is this value is stored?')
    PersistanceHelper.getObject('loginDetails')
      .then(data => {
        if (data.username && data.password) {
          setIsUserLoggedIn(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name={'TestContext'}
          component={TestContext}
          title={'TestContext'}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
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
          name={'testApiScreen'}
          component={TestApiScreen}
          title={'Test API'}
        />
        <Stack.Screen
          name={'TestUseRef'}
          component={TestUseRef}
          title={'Test UseRef'}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          title={'DashBoardScreen'}
        />

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
      <Provider store={store}>
        <Stack.Navigator>
          {isUserLoggedIn ? getMainStack() : getAuthStack()}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
