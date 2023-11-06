import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const MyTestFuncComponent = props => {
  const {bgColor} = props;
  const [score, setScore] = useState(props.score);

  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <View style={{backgroundColor: bgColor}}>
      <Text
        style={{
          backgroundColor: 'yellow',
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        Hi Janani, this is functional component
      </Text>
      <Text
        style={{
          backgroundColor: 'yellow',
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {score}
      </Text>
      <Button
        title="change the score to 200"
        onPress={() => {
          setScore(200);
        }}
      />

      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />

      <Button
        title="No change"
        onPress={() => {
          setCounter(counter + 0);
        }}
      />
      <Text>{counter}</Text>

      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Button
        title="change the score to 300"
        onPress={() => {
          setScore(300);
        }}
      />

      <Button
        title="change the score to 500"
        onPress={() => {
          setScore(500);
        }}
      />
      <TextInput
        value={text}
        onChangeText={changedText => {
          console.log(changedText);
          setText(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40}}
      />
    </View>
  );
};

//function MyTestFuncComponent(props){
//return (
// <View style={{backgroundColor:bgColor}}>
//  <Text>Hi Janani, this is functional component</Text>
// <Text>props.score</Text>
// </View>
// );
//}

export default MyTestFuncComponent;
