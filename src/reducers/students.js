import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const schoolApi = createApi({
    reducerPath: 'schoolApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/api/v1/'}),
    endpoints: (builder) => ({
        getStudentById: builder.query({
            query: (id) => `student/${id}`,
        }),
        getStudentByName: builder.query({
            query: (name) => `students/name/${name}`,
        }),
        getStudents : builder.query({
            query:()=> 'students'
        })
    }),
})

export const {useGetStudentByNameQuery, useGetStudentsQuery, useGetStudentByIdQuery,} = schoolApi