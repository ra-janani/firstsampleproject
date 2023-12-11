import {} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const Settings = props => {
  console.log('props are:::', props);
  const {route} = props;
  return (
    <View>
      <Text>This is settings screen</Text>
      <Text>This is from dashboard screen:::{route.params.city}</Text>
      <Text>This is also from dashboard screen:::{route.params.country}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Settings');
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
      <Button
        title="Go to dashboard at once"
        onPress={() => {
          props.navigation.navigate('DashBoard');
        }}
      />
      <Button
        title={'Go Back'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />

      <Button
        title={'For PopToTop'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />

      <Button
        title={'Change the params from this screen'}
        onPress={() => {
          props.navigation.setParams({city: 'Trichy', country: 'UK'});
        }}
      />
      <Button
        title={'Update params from inside the settings screen'}
        onPress={() => {
          props.navigation.setParams({
            city: 'Banglore',
            country: 'India',
          });
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            name:'DashBoard',
            params:{batch:4,topic:'passing params to back screen'},
            merge:true});
        }}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
