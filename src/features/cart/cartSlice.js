import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes.
    // Also, no return statement is required from these functions.
    addCart: (state, action) => {
      const itemToAdd = action.payload;
      const itemPresentIndex = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentIndex !== -1) {
        const itemFoundObject = state.cartItems[itemPresentIndex];
        itemFoundObject.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
      // state.cartItems.push(action.payload);
    },
    removeCart: (state, action) => {
      const itemToRemove = action.payload;
      const itemPresentIndex = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToRemove.name;
      });
      if (itemPresentIndex !== -1) {
        const itemFoundObject = state.cartItems[itemPresentIndex];

        if (itemFoundObject.quantity > 1) {
          itemFoundObject.quantity -= 1;
        } else {
          state.cartItems.splice(itemPresentIndex, 1);
          // state.cartItems.pop({item: itemToRemove, quantity: 0});

          //eg for splice
          //let myArray = [1, 2, 3, 4, 5];
          // Remove two elements starting from index 1 and insert 'a' and 'b' in their place
          //myArray.splice(1, 2, 'a', 'b');
          //console.log(myArray); // Output: [1, 'a', 'b', 4, 5]
        }
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCart, removeCart, clearCart} = cartSlice.actions; // export all our actions here

export default cartSlice.reducer;
