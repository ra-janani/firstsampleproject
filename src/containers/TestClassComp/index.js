import {React, useCallback, useState, useMemo, useEffect} from 'react';
import {SafeAreaView, TextInput, View, Button, Text} from 'react-native';
import LevelOne from './LevelOne';
import {PersistanceHelper} from '../../helpers';

// class TestClassComp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       inputText: '',
//       inputText2:''
//     };
//   }

//   componentWillUnmount(){
//     console.log('class component got unmounted');
//   }
//   render() {
//     const {inputText,inputText2}=this.state;
//    console.log('testclass component rendered');
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <TextInput
//           style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
//           value={this.state.inputText}
//           placeholder="Type anything"
//           onChangeText={changedText => {
//             this.setState({inputText: changedText});
//           }}
//         />
//         <TextInput
//           style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
//           value={this.state.inputText2}
//           placeholder="Type anything"
//           onChangeText={changedText => {
//             this.setState({inputText2: changedText});
//           }}
//         />
//         <LevelOne inputText={inputText} inputText2={inputText2}></LevelOne>
//         <LevelOne></LevelOne>
//       </SafeAreaView>
//     );
//   }
// }
// export default TestClassComp;

const TestClassComp = props => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [inputText2, setInputText2] = useState('');
  // const [myFunRef, setMyFunRef] = useState(() => {
  //   console.log('this is use state replacement for callback');
  // });

  useEffect(async() => {

const fetchedValue=await PersistanceHelper.getValue('myFirstKey');
console.log("FetchedValue:::"+fetchedValue);

    // PersistanceHelper.getValue(
    //   'myFirstKey',
    //   data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    // );
  }, []);
  const myCustomCallBack = useCallback(() => {
    console.log('this is my callback');
  }, []);

  const increment = () => {
    setCount(c => c + 1);
  };
  const myCalculation = useMemo(() => expensiveCalculation(count), [count]);

  console.log('testclass component rendered');
  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
        value={inputText}
        placeholder="Type anything"
        onChangeText={changedText => {
          setInputText(changedText);
        }}
      />
      <TextInput
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
        value={inputText2}
        placeholder="Type anything"
        onChangeText={changedText => {
          setInputText2(changedText);
        }}
      />

      <Button
        title="Increase Count"
        onPress={() => {
          increment();
        }}
      />
      <Text>{myCalculation}</Text>
      <LevelOne
        inputText={inputText}
        someCallBack={myCustomCallBack}></LevelOne>
    </SafeAreaView>
  );
};

const expensiveCalculation = num => {
  console.log('calculating');
  for (let i = 0; i < 10; i++) {
    num += 1;
  }
  return num;
};
export default TestClassComp;
