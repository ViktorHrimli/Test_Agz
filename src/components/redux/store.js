import { configureStore } from '@reduxjs/toolkit';
import { reducerUser } from './slice';

const store = configureStore({
  reducer: {
    users: reducerUser,
  },
});

export { store };
