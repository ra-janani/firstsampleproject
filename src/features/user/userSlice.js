import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
const initialState = {};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isFetching = true;
    },
    success: (state, action) => {
      // state.data = action.payload;
      if (action.payload.userId) {
        state.data = {...action.payload, accessToken: action.payload.id};
        delete state.data.id;
      } else {
        state.data = action.payload;
      }

      state.isFetching = false;
      state.failure = false;
      state.errorMessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
    logout: () => {
      state.data = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {request, success, failure, logout} = userSlice.actions;

export default userSlice.reducer;
// name: 'user',
// initialState: {
//   isAuthenticated: false,
//   user: null,
// },
// reducers: {
//   // Login action
//   login: (state, action) => {
//     // Assuming the action.payload contains user information after successful login
//   const {username, password}=action.payload;
//   if(!username||!password){
//       Alert.alert('Username or password is empty. Cannot login.');
//       return;
//   }
//     state.isAuthenticated = true;
//     state.user = action.payload;
//   },
//   // Logout action
//   logout: state => {
//     state.isAuthenticated = false;
//     state.user = null;
//   },
// },
//});

// Action creators are generated for each case reducer function
//export const {login, logout} = userSlice.actions;

//export default userSlice.reducer;
