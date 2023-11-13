import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import LevelOne from './LevelOne';

class TestClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      inputText2:''
    };
  }
  render() {
    const {inputText,inputText2}=this.state;
   // console.log('testclass component rendered');
    return (
      <SafeAreaView style={{flex: 1}}>
        <TextInput
          style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
          value={this.state.inputText}
          placeholder="Type anything"
          onChangeText={changedText => {
            this.setState({inputText: changedText});
          }}
        />
        <TextInput
          style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
          value={this.state.inputText2}
          placeholder="Type anything"
          onChangeText={changedText => {
            this.setState({inputText2: changedText});
          }}
        />
        <LevelOne inputText={inputText} inputText2={inputText2}></LevelOne>
        <LevelOne></LevelOne>
      </SafeAreaView>
    );
  }
}
export default TestClassComp;
