import React from 'react';
import {View, Text} from 'react-native';
import LevelTwo from './LevelTwo';
import _ from 'lodash';

class LevelOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {someText: props.inputText};
  }

  componentDidMount() {
    // console.log('Level one component did mount');
  }

  componentDidUpdate(prevProps) {
    console.log('previous prop:');
    console.log(prevProps);
    console.log('this props:' + this.props.inputText);
    if (prevProps.inputText !== this.props.inputText) {
      this.setState({someText: this.props.inputText});
    }
  }

    shouldComponentUpdate(nextProps, nextState) {
     // const decision= nextProps.someProps!==this.props.someProps
     // here we are comparing only one variable which avoids heavy comparision

      const decision =
       !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);

      return decision;
    }
  render() {
    console.log('LevelOne rendered');
    const {someText} = this.state;
    return (
      <View style={{flex: 1, margin: 10, backgroundColor: 'blue'}}>
        <Text style={{color: 'white'}}>{someText}</Text>
        <LevelTwo></LevelTwo>
        <LevelTwo></LevelTwo>
      </View>
    );
  }
}
export default LevelOne;
