import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: []};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.items=action.payload;
      state.failure=false;
      state.errorMessage='';    
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage=action.payload;
      state.failure=true;
    },
    addItem: (state, action) => {},
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
