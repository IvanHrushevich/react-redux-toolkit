import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User } from '../../models/User';

export const fetchUsers = createAsyncThunk('users/fetchAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue('Error while loading.');
  }
});
