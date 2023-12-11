import React from 'react';
import {View, Text} from 'react-native';
import LevelThree from './LevelThree';

// class LevelTwo extends React.Component {
//   constructor(props) {
//     super(props);
//     //console.log('LevelTwo constructor');
//   }

//   componentDidMount() {
//     //console.log('Level two component did mount');
//   }

//   componentDidUpdate() {
//     //console.log('Level two component did update');
//   }

//   render() {
//     //console.log('LevelTwo rendered');
//     return (
//       <View style={{flex: 1, margin: 10, backgroundColor: 'yellow'}}>
//         <LevelThree></LevelThree>
//         <LevelThree></LevelThree>
//         <LevelThree></LevelThree>
//       </View>
//     );
//   }
// }

// export default LevelTwo;

const LevelTwo = (props) => {
    console.log('LevelTwo rendered');
  return (
    <View style={{flex: 1, margin: 10, backgroundColor: 'yellow'}}>
      <LevelThree></LevelThree>
      <LevelThree></LevelThree>
      <LevelThree></LevelThree>
    </View>
  );
};

export default LevelTwo;
