import {useState, createContext,useContext,memo} from 'react';
import {View, Text, TextInput} from 'react-native';
const userContext = createContext();

const TestContext = () => {
  const [user, setUser] = useState('Jessie Hall');
  console.log('TextContext1');
  return (
    
    <userContext.Provider value={user}>
      <View style={{backgroundColor: 'red', margin: 5}}>
        <Text>Component 1 {user}</Text>
        <TextInput
          style={{
            backgroundColor: 'lightblue',
            margin: 5,
            borderColor: 'black',
            borderWidth: 2,
          }}
          value={user}
          onChangeText={changedText => {
            setUser(changedText);
          }}
        />
        <TestContext2 />
      </View>
    </userContext.Provider>
  );
};
const TestContext2 = () => {
  console.log('TextContext2');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>Component 2</Text>
      <TestContext3 />
    </View>
  );
}
const TestContext3 = () => {
  console.log('TextContext3');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 3</Text>
      <TestContext4 />
    </View>
  );
};
const TestContext4 = () => {
  console.log('TextContext4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Component 4</Text>
      <TestContext5 />
    </View>
  );
};
const TestContext5 = () => {
  console.log('TextContext5');
  const user= useContext(userContext);  
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 5</Text>
      <Text>{user}</Text>
    </View>
  );
};

export default TestContext;

// const TestContext = () => {
//   const [user, setUser] = useState('Jessie Hall');
//   return (
//     <View style={{backgroundColor: 'red', margin: 5}}>
//       <Text>Component 1 {user}</Text>
//       <TextInput
//         style={{
//           backgroundColor: 'lightblue',
//           margin: 5,
//           borderColor: 'black',
//           borderWidth: 2,
//         }}
//         value={user}
//         onChangeText={changedText => {
//           setUser(changedText);
//         }}
//       />
//       <TestContext2 user={user} />
//     </View>
//   );
// };
// const TestContext2 = ({user}) => {
//   return (
//     <View style={{backgroundColor: 'green', margin: 5}}>
//       <Text>Component 2</Text>
//       <TestContext3 user={user} />
//     </View>
//   );
// };
// const TestContext3 = ({user}) => {
//   return (
//     <View style={{backgroundColor: 'blue', margin: 5}}>
//       <Text>Component 3</Text>
//       <TestContext4 user={user} />
//     </View>
//   );
// };
// const TestContext4 = ({user}) => {
//   return (
//     <View style={{backgroundColor: 'yellow', margin: 5}}>
//       <Text>Component 4</Text>
//       <TestContext5 user={user} />
//     </View>
//   );
// };
// const TestContext5 = ({user}) => {
//   return (
//     <View style={{backgroundColor: 'pink', margin: 5}}>
//       <Text>Component 5</Text>
//       <Text>{user}</Text>
//     </View>
//   );
// };

// export default TestContext;
