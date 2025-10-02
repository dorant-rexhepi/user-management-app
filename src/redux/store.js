// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import users reducer
import usersReducer from './userSlice';
// Create and export the Redux store
export const store = configureStore({
  reducer: 
  {
    users: usersReducer // Add users slice to the store
  }
});