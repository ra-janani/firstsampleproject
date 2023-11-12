import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import {MyTestComponent} from '../../components';
import Abc from '../SettingsScreen/abc';

const DashBoardScreen = props => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [cityList, setCityList] = useState([
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
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <TextInput
        value={city}
        onChangeText={changedText => {
          setCity(changedText);
        }}
        style={{
          backgroundColor: 'pink',
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
        }}
        placeholder="Enter the City"
      />
      <Button title={'Add city to the list'}
      onPress={()=>{
        setCityList([...cityList,{title:city}]);
        setCity('');
      }}

      />

      <FlatList
        data={cityList}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 40,
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
          props.navigation.navigate('Settings', {city, country});
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 100,
        }}>
        <Text>Go to settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
