import {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import ChildComp from './myChildComponent';

const HookEffectScreen = () => {
  const [firstName, setFirstName] = useState('Janani');
  const [lastName, setLastName] = useState('Rajendran');

  useEffect(() => {
    console.log('use effect is called');

    return()=>{
      console.log('this is called inside useEffect functional component')
    }
  }, []);

  console.log('render ran');
  return (
    <View>
      <Text>This is hook effect screen</Text>

      <TextInput
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
        value={firstName}
        onChangeText={ct => {
          setFirstName(ct);
        }}
      />

      <TextInput
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
        value={lastName}
        onChangeText={ct => {
          setLastName(ct);
        }}
      />
      <ChildComp firstName={firstName} lastName={lastName}/>
    </View>
  );
};

export default HookEffectScreen;
