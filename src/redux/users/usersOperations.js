import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://64304bd2b289b1dec4c58eec.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  `/users/fetchUserById`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  `/users/deleteUserById`,
  async (id, { rejectWithValue }) => {
    try {
      await axios.get(`/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
