import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos',

            // To get automatic refetching
            providesTags: ['Todo'], // Assigns the 'Todo' tag to the query
        }),

        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo,
            }),
            // To get automatic refetching
            invalidatesTags: ['Todo'],
        }),

        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            // To get automatic refetching
            invalidatesTags: ['Todo'],
        }),

        updateTodo: builder.mutation({
            query: ({ id, completed }) => ({
              url: `/todos/${id}`,
              method: 'PATCH',
              body: { completed }, // Update the completed status
            }),
             // To get automatic refetching
             invalidatesTags: ['Todo'],
          }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = todoApi;
