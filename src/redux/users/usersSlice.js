import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';
import { fetchUser } from './usersOperations';
import { deleteUserById } from './usersOperations';
import { AddUser } from './usersOperations';
import { UpdateUser } from './usersOperations';

const USER_ACTIONS = [
  fetchUsers,
  fetchUser,
  deleteUserById,
  AddUser,
  UpdateUser,
];

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          element => element.id === action.payload
        );
        state.items.splice(index, 1);
        state.currentUser = null;
      })
      .addCase(AddUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          element => element.id === action.payload
        );
        state.items.splice(index, 1, action.payload);
        state.currentUser = action.payload;
      })
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...USER_ACTIONS.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const userReducer = usersSlice.reducer;
