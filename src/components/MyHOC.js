import {} from 'react';
import {View, Text} from 'react-native';

const MyHOC = props => {
  return (
    <View>
      <Text>Higher Order Component</Text>
      <View style={{backgroundColor: 'yellow'}}>{props.children}</View>
    </View>
  );
};

export default MyHOC;
