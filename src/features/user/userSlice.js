import { createSlice } from '@reduxjs/toolkit';
import {Alert} from "react-native";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    // Login action
    login: (state, action) => {
      // Assuming the action.payload contains user information after successful login
    const {username, password}=action.payload;
    if(!username||!password){
        Alert.alert('Username or password is empty. Cannot login.');
        return; 
    }
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // Logout action
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
