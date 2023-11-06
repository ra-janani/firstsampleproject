import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

class MyTestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mutableBGColor: props.bgColor,
      myName: props.name,
      myTextInput: '',
      counter: 0,
    };
  }

  render() {
    const {mutableBGColor, myTextInput, myName, counter} = this.state;

    return (
      <View
        style={{
          backgroundColor: 'pink',

          marginVertical: 10,
        }}>
        <Text style={{height: 40}}>Hi Janani, this is class component</Text>
        <Text style={{height: 40}}>{myName}</Text>
        <Button
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
          }}
          title="Change name to Sharvesh"
          onPress={() => {
            this.setState({myName: 'Sharvesh'});
          }}
        />
        <Button
          title="Increment"
          onPress={() => {
            this.setState({counter: counter + 1});
          }}
        />
        <Text>{counter}</Text>
        <Button
          title="Decrement"
          onPress={() => {
            this.setState({counter: counter - 1});
          }}
        />
        <TextInput
          placeholder="My PlaceHolder"
          value={myTextInput}
          onChangeText={changedText => {
            console.log(changedText);
            this.setState({myTextInput: changedText});
          }}
          style={{
            backgroundColor: mutableBGColor,
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <TouchableOpacity
          style={{height: 20}}
          onPress={() => {
            //To change to blue color

            this.setState({myName: 'Santhosh'});
          }}>
          <Text>Press to change to santhosh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 20}}
          onPress={() => {
            //To change to red color

            this.setState({mutableBGColor: 'red'});
          }}>
          <Text>Press to change to red color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{height: 20}}
          onPress={() => {
            //To change to change to orange color

            this.setState({mutableBGColor: '#d47f35'});
          }}>
          <Text>Press to change to orange color</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyTestComponent;
