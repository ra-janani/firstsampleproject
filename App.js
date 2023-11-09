/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button
} from 'react-native';

const Stack = createNativeStackNavigator();

const DashBoardScreen = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
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
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Settings');
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Go to settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{title: 'OverView'}}
        />

        <Stack.Screen
          name="Settings"
          component={props => {
            return (
              <View>
                <Text>This is settings screen</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.push('Settings');
                  }}
                  style={{height:40,
                    marginHorizontal:10,
                  backgroundColor:'pink',
                justifyContent:'center',
              alignItems:'center'}}><Text>Go to settings</Text></TouchableOpacity>
              <Button title='Go to dashboard at once' onPress={()=>{
                props.navigation.navigate('DashBoard')
              }}/>
              <Button title={'Go Back'} onPress={()=>{
                props.navigation.goBack();
              }}/>
              </View>
            );
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
