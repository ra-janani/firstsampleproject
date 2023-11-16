import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import TestContext2 from './TestContext2';
import TestContext5 from './TestContext5';
import {UserContextProvider} from '../../contexts/UserContext';

const TestContext = () => {
  const [user, setUser] = useState('Jessie Hall');
  console.log('TextContext1');
  return (
    <>
      <UserContextProvider username={user} setUsername={setUser}>
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
      </UserContextProvider>
      <TestContext5 />
    </>
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

 










// import {useState, createContext, useContext, memo} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';
// const userContext = createContext();

// const TestContext = () => {
//   const [user, setUser] = useState('Jessie Hall');
//   console.log('TextContext1');
//   return (
//     <userContext.Provider value={{getter: user, setter: setUser}}>
//       <View style={{backgroundColor: 'red', margin: 5}}>
//         <Text>Component 1 {user}</Text>
//         <TextInput
//           style={{
//             backgroundColor: 'lightblue',
//             margin: 5,
//             borderColor: 'black',
//             borderWidth: 2,
//           }}
//           value={user}
//           onChangeText={changedText => {
//             setUser(changedText);
//           }}
//         />
//         <TestContext2 />
//       </View>
//     </userContext.Provider>
//   );
// };
// const TestContext2 = () => {
//   console.log('TextContext2');
//   return (
//     <View style={{backgroundColor: 'green', margin: 5}}>
//       <Text>Component 2</Text>
//       <TestContext3 />
//     </View>
//   );
// };
// const TestContext3 = () => {
//   console.log('TextContext3');
//   return (
//     <View style={{backgroundColor: 'blue', margin: 5}}>
//       <Text>Component 3</Text>
//       <TestContext4 />
//     </View>
//   );
// };
// const TestContext4 = () => {
//   const {getter, setter} = useContext(userContext);
//   console.log('TextContext4');
//   return (
//     <View style={{backgroundColor: 'yellow', margin: 5}}>
//       <Text>Component 4</Text>
//       <Text>{getter}</Text>
//       <TestContext5 />
//     </View>
//   );
// };
// const TestContext5 = () => {
//   const {getter, setter} = useContext(userContext);

//   console.log('TextContext5');
//   const user = useContext(userContext);
//   return (
//     <View style={{backgroundColor: 'pink', margin: 5}}>
//       <Text>Component 5</Text>
//       <Text>{getter}</Text>
      {/* <TextInput
        placeholder="Type name here"
        style={{
          backgroundColor: 'lightblue',
          height: 50,
          borderWidth: 2,
          borderColor: 'black',
          padding: 10,
        }}
        value={user}
        onChangeText={ct => {
          setter(ct);
        }}
      /> */}
//       <Button
//         title={'change the name'}
//         onPress={() => {
//           setter('Janani');
//         }}
//       />
//     </View>
//   );
// };

// export default TestContext;

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
