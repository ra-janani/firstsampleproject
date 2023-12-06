import {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

const TestApiScreen = () => {
  const [data, setData] = useState([]);
  const count = useSelector(state => state.counter.value); // subscription from component to the store
  const dispatch = useDispatch();

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
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Text>{count}</Text>

      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />
     
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text
                style={{
                  backgroundColor: 'pink',
                  margin: 10,
                  alignContent: 'center',
                }}>
                {item.title}
              </Text>
              <Text style={{backgroundColor: 'lightblue', margin: 10}}>
                {item.userId}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default TestApiScreen;
