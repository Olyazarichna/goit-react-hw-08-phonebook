import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
    }),
    login: builder.mutation({
      query: payload => ({
        url: 'users/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: payload => ({
        url: 'users/logout',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    signup: builder.mutation({
      query: payload => ({
        url: 'users/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
} = authApi;
