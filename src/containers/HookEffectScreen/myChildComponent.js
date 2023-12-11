import {useState,useEffect} from 'react';
import {View, Text} from 'react-native';

const myChildComponent = props => {
    const [firstName,setFirstName]=useState(props.firstName);
    const [lastName,setLastName]=useState(props.lastName);

    useEffect(()=>{
        setFirstName(props.firstName);
        setLastName(props.lastName);
    },[props.firstName,props.lastName]);
  return (
    <View>
      <Text style={{backgroundColor:'yellow', height:40,margin:10,padding:5}}>{firstName}</Text>
      <Text style={{backgroundColor:'yellow', height:40,margin:10,padding:5}}>{lastName}</Text>
    </View>
  );
};
export default myChildComponent;
