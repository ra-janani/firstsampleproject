import {View, Text} from 'react-native';
import React from 'react';

export default function TypeScriptScreen() {
  let myName: string;
  let myPhoneNumber: number;
  let isDriving: boolean;
  let courses: string[];
  let scores: number[];
  let arrayOfBoolean: boolean[];

  myName = 'Janani';
  myPhoneNumber = 123456;
  isDriving = true;
  courses = ['Android', 'ios', 'RN'];
  scores = [70, 50, 90];
  arrayOfBoolean = [true, false, false];

  //let person: {name: string; age: number};
 // person = {name: 'janani', age: 33};


 type Person={name:string,age:number,courses?:string[]};
 type Person2={fullName:string,email:string,address:string};

 type CommonPerson=Person|Person2;  // UNION

 let person:Person;
 person={name:'sharvesh',age:8,courses:['android','ios']};

  let people: CommonPerson[];
  people= [
    {name: 'jan', age: 33,courses:['eng','tamil']},
    {name: 'raj', age: 33},
    {name: 'reen', age: 3},
    {fullName:'jan raj',email:'ra.janani',address:'street'}
  ];

  return (
    <View>
      <Text>index</Text>
      <Text>{myPhoneNumber}</Text>
    </View>
  );
}
