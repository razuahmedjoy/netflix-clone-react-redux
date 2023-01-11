import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading:true,
  user: null
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoading = false;
    }

  },

});


export const selectUser = state => state.user;

export const { login, logout } = userSlice.actions;


export default userSlice.reducer;
