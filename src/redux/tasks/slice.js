import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchTasks, addTask, deleteTask } from './operations';
import * as reducer from './reducers';

const extraActions = [fetchTasks, addTask, deleteTask];
const getActions = type => extraActions.map(action => action[type]);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, reducer.fetchTasksFulfilled)
      .addCase(addTask.fulfilled, reducer.addTaskFulfilled)
      .addCase(deleteTask.fulfilled, reducer.deleteTaskFulfilled)
      .addCase(logOut.fulfilled, reducer.logOutFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), reducer.anyPending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), reducer.anyFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), reducer.anyRejected),
});

export const tasksReducer = tasksSlice.reducer;
