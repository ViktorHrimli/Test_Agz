import { createSlice } from '@reduxjs/toolkit';

const usersDataSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    getNewUser(state, actions) {
      state.push(actions.payload);
    },
  },
});

const reducerUser = usersDataSlice.reducer;
const { getNewUser } = usersDataSlice.actions;

export { reducerUser, getNewUser };
