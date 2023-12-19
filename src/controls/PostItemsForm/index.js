import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {kApiPostItems} from '../../config/WebService';
import {itemActions} from '../../features/item/itemSlicer';
import {ApiHelper} from '../../helpers';

const {request, success, failure,addItem} = itemActions;

export default function PostItemsForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const inputStyle = {
    backgroundColor: 'lightblue',
    height: 40,
    margin: 10,
    padding: 5,
  };

  return (
    <View>
      <TextInput
        style={inputStyle}
        value={title}
        onChange={ct => {
          setTitle(ct);
        }}
        placeholder="Enter Title"
      />
      <TextInput
        style={inputStyle}
        value={image}
        onChange={ct => {
          setImage(ct);
        }}
        placeholder="Enter Image URL"
      />
      <TextInput
        style={inputStyle}
        value={details}
        onChange={ct => {
          setDetails(ct);
        }}
        placeholder="Enter Details"
      />
      <Button
        title={'Submit'}
        onPress={() => {
          dispatch(request());
          ApiHelper.post(
            kApiPostItems,
            {title, image, details},
            {'X-Access-Token': user.data.accessToken},
          )
            .then(response => {
             // dispatch(success(response));
             dispatch(addItem(response));
            })
            .catch(error => {
              dispatch(failure(error));
            });
        }}
      />

      <Text>PostItemsForm</Text>
    </View>
  );
}
