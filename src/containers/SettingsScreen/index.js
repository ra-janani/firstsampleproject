import {} from 'react';
import {View,Text,TouchableOpacity,Button} from 'react-native';


const Settings = (props) => {
    console.log("props are:::",props);
    const {route}=props;
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
      </View>
    );
  };

  export default Settings;