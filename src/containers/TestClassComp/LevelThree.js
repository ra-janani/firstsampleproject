import React from 'react';
import {View} from 'react-native';

class LevelThree extends React.Component {
  constructor(props) {
    super(props);
    //console.log('LevelThree constructor');
  }

  componentDidMount() {
    //console.log('Level three component did mount');
  }

  componentDidUpdate() {
   // console.log('Level three component did update');
  }
  render() {
    //console.log('LevelThree rendered');
    return (
      <View style={{backgroundColor: 'green', flex: 1, margin: 10}}></View>
    );
  }
}
export default LevelThree;
