import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['comments'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
    singleProduct: build.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: build.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: build.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
