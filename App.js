/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, FlatList, Image, SafeAreaView} from 'react-native';

const Stack = createNativeStackNavigator();

const DashBoardScreen = () => {
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
    </SafeAreaView>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Settings" component={()=>{
          return(<View><Text>This is settings screen</Text></View>);
        }} />
        <Stack.Screen name="DashBoard" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
