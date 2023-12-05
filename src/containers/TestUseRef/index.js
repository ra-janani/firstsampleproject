import {useState, useRef} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

const TestUseRef = props => {
  const [textInput, setTextInput] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  return (
    <View>
      <Text>Use useref</Text>
      <TextInput
        ref={input1Ref}
        style={{
          backgroundColor: 'pink',
          borderColor: 'black',
          borderWidth: 1,
          height: 40,
          margin: 10,
        }}
        value={textInput}
        onChangeText={ct => {
          setTextInput(ct);
        }}
      />

      <TextInput
        ref={input2Ref}
        style={{
          backgroundColor: 'pink',
          borderColor: 'black',
          borderWidth: 1,
          height: 40,
          margin: 10,
        }}
        value={textInput2}
        onChangeText={ct => {
          setTextInput2(ct);
        }}
      />
      <Button
        title={'Focus first textinput'}
        onPress={() => {
          input1Ref.current.focus();
        }}
      />
      <Button
        title={'Focus second textinput'}
        onPress={() => {
          input2Ref.current.focus();
        }}
      />
      <Button
        title={'clear first textinput'}
        onPress={() => {
          input1Ref.current.clear();
        }}
      />
      <Button
        title={'clear second textinput'}
        onPress={() => {
          input2Ref.current.clear();
        }}
      />
    </View>
  );
  Ì;
};

export default TestUseRef;
