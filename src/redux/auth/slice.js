import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './operations';
import * as reducer from './reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, reducer.registerFulfilled)
      .addCase(login.fulfilled, reducer.loginFulfilled)
      .addCase(logOut.fulfilled, reducer.logOutFulfilled)
      .addCase(refreshUser.fulfilled, reducer.refreshUserFulfilled)
      .addCase(refreshUser.pending, reducer.refreshUserPending)
      .addCase(refreshUser.rejected, reducer.refreshUserRejected),
});

export const authReducer = authSlice.reducer;
