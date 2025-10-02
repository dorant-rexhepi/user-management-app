import { createSlice } from '@reduxjs/toolkit';

// Initial state for users
const initialState = { users: [] };

// Create users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Set users array
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    // Add new user at the beginning
    addUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    // Update existing user
    updateUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    // Delete user by id
    deleteUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    }
  }
});
// Export actions
export const {setUsers, addUser, updateUser, deleteUser} = usersSlice.actions;
// Export reducer
export default usersSlice.reducer;
