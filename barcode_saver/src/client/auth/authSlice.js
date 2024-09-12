import { createSlice } from "@reduxjs/toolkit";
import api from "../store/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;


const TOKEN_KEY = "token"; 

const storeToken = (state, { })

