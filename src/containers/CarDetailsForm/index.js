import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

const CarDetailsForm = () => {
  const navigation = useNavigation();
  const [carName, setCarName] = useState('Honda'); // Separate state for carName
  const [carNum, setCarNum] = useState('City'); // Separate state for carNum
  const [carDetail, setCarDetail] = useState([carName,carNum]);

  const handleItemClick = () => {
    props.navigation.navigate('CarDetailScreen');
  };

  return (
    <View style={{marginVertical: 10}}>
      <Text>This is car details form</Text>
      <TextInput
        value={carName}
        onChangeText={changedText => {
          setCarName(changedText);
        }}
        style={{
          backgroundColor: 'pink',
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
        }}
        placeholder="Enter the car name"
      />
      <TextInput
        value={carNum}
        onChangeText={changedText => {
          setCarNum(changedText);
        }}
        style={{
          backgroundColor: 'pink',
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
        }}
        placeholder="Enter the car number"
      />
      <Button
        title={'Add car details'}
        onPress={() => {
          setCarDetail([...carDetail, {carName, carNum}]);
          setCarName(''); // Clear the input field
          setCarNum(''); // Clear the input field
        }}
      />

      <FlatList
        data={carDetail}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
               navigation.navigate('CarDetailScreen');
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  height: 40,

                  alignItems: 'center',
                }}>
                <Text>{item.carName}</Text>
                <Text>{item.carNum}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CarDetailsForm;
