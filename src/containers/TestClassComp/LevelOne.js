import React from 'react';
import {View} from 'react-native';
import LevelTwo from './LevelTwo';

class LevelOne extends React.Component {
  constructor(props) {
    super(props);
    console.log('LevelOne constructor');
  }

  componentDidMount(){
    console.log('Level one component did mount');
  }

  componentDidUpdate(){
    console.log('Level one component did update');
  }
  render() {
    console.log('LevelOne rendered');
    return (
      <View style={{flex: 1, margin: 10, backgroundColor: 'blue'}}>
        <LevelTwo></LevelTwo>
        <LevelTwo></LevelTwo>
      </View>
    );
  }
}
export default LevelOne;
