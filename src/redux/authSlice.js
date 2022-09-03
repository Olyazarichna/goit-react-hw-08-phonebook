import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { user, token } = payload;
      state.email = user.email;
      state.name = user.name;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    getCurrent: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  // extraReducers: builder => {
  //   builder.addMatcher(
  //     authApi.endpoints.login.matchFulfilled,
  //     (state, { payload }) => {
  //       const { user, token } = payload;
  //       state.email = user.email;
  //       state.name = user.name;
  //       state.token = token;
  //       state.isLoggedIn = true;
  //     }
  //   );
  // },
  // builder.addMatcher(
  //   authApi.endpoints.currentUser.matchRejected,
  //   (state, { payload }) => {
  //     if (payload.status === 401) {
  //       state.token = '';
  //     }
  //   }
  // );
  // },
});

// // Action creators are generated for each case reducer function
export const { login, logout, getCurrent } = authSlice.actions;

export default authSlice.reducer;
