import {useState, useEffect} from 'react';
import {} from 'react-native';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import {PersistanceHelper} from '../helpers';
import {clearCart} from '../features/cart/cartSlice';
import {useDispatch} from 'react-redux';

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
  TestReduxScreen,
  CartScreen,
  TestReduxClass
} from '../containers';

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

const Navigator = () => {
  const dispatch = useDispatch();
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

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigation = useNavigation();
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Sign up"
          component={() => (
            <View>
              <Text>SignUp screen</Text>
            </View>
          )}
        />
        <Stack.Screen
          name={'TestContext'}
          component={TestContext}
          title={'TestContext'}
        />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name={'testReduxScreenClass'}
          component={TestReduxClass}
          options={{
            title: 'Test Redux Class component',
            headerRight: () => (
              <Button
                title={'Cart'}
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
              />
            ),
          }}
        />

        <Stack.Screen
          name={'testReduxScreen'}
          component={TestReduxScreen}
          options={{
            title: 'Test Redux',
            headerRight: () => (
              <Button
                title={'Cart'}
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name={'cartScreen'}
          component={CartScreen}
          options={{
            title: 'Test cart using Redux',
            headerRight: () => (
              <Button
                title={'Clear Cart'}
                onPress={() => {
                  dispatch(clearCart());
                }}
              />
            ),
          }}
          // title={'Test cart using Redux'}
        />
        <Stack.Screen
          name={'testApiScreen'}
          component={TestApiScreen}
          options={{title: 'Test API'}}
          // title={'Test API'}
        />
        <Stack.Screen
          name={'TestUseRef'}
          component={TestUseRef}
          options={{title: 'Test UseRef'}}
          //title={'Test UseRef'}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{title: 'DashBoardScreen'}}
          // title={'DashBoardScreen'}
        />

        <Stack.Screen
          name={'TestClassComp'}
          component={TestClassComp}
          options={{title: 'TestClassComp'}}
          // title={'TestClassComp'}
        />
        <Stack.Screen
          name={'HookEffectScreen'}
          component={HookEffectScreen}
          options={{title: 'HookEffectScreen'}}
          // title={'HookEffectScreen'}
        />

        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{title: 'Home'}}
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
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
