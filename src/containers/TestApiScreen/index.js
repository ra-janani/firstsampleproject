import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const TestApiScreen = () => {
  const [data, setData] = useState([]);
  //   useEffect(async () => {
  //     const result = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     console.log("result:"+result?.data);
  //   }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(x => x.json())
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Text>Test API</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text style={{backgroundColor:'pink', margin:10, alignContent:'center'}}>{item.title}</Text>
              <Text style={{backgroundColor:'lightblue', margin:10}}>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default TestApiScreen;
