import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../models/Post';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Post[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
    }),
    createPost: build.mutation<Post, Post>({
      query: (post: Post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});
