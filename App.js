/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Text,
  TextInput,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Switch,
} from 'react-native';
import MyTestComponent from './src/components/MyTestComponent';
import MyTestFuncComponent from './src/components/MyTestFuncComponent';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1, margin: 40}}>
      <ScrollView>
        <MyTestComponent bgColor="lightblue" name="Janani" />
        <MyTestFuncComponent bgColor="yellow" score={400} />

        {/* <Text>Hello World!!!</Text>
        <Text>First Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#84cf98'}} />
        <Text>Last Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#4e5873'}} />
        <Text>City</Text>
        <TextInput style={{height: 40, backgroundColor: '#ac74ad'}} />
        <Text>Country</Text>
        <TextInput style={{height: 40, backgroundColor: '#d1bc92'}} />
        <Image
          style={{width: 200, height: 200, marginTop: 40}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png',
          }}
        />
        <Image
          style={{width: 200, height: 200, marginVertical: 40}}
          source={{
            uri: 'https://images.freeimages.com/images/large-previews/b05/more-marbles-less-random-1483002.jpg?fmt=webp&w=350',
          }}
        />
        <ActivityIndicator size="small" color="#0000ff" />
        <Button
          title={'Submit'}
          onPress={() => {
            Alert.alert('Success', 'Form Submitted');
          }}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TouchableOpacity activeOpacity={0.5} style={{margin: 50}}>
          <View>
            <Text>This is touchable text</Text>
            <Image
              style={{width: 200, height: 200, marginVertical: 40}}
              source={{
                uri: 'https://images.freeimages.com/images/large-previews/b05/more-marbles-less-random-1483002.jpg?fmt=webp&w=350',
              }}
            />
          </View>
        </TouchableOpacity>  */}
      </ScrollView>
    </View>
  );
}

export default App;
