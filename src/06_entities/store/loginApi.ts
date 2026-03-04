import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    id: number,
    email: string,
    name: string
}

interface LoginResponse {
    access_token: string,
    user: User
}

interface Login {
    email: string,
    password: string
}

interface Register {
    name: string,
    email: string,
    password: string
}


export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/auth/'
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, Login>({
            query: (user) => ({
                url: 'login',
                method: 'POST',
                body: user
            })
        }),
        register: builder.mutation<LoginResponse, Register>({
            query:  (user) => ({
                url: 'register',
                method: 'POST',
                body: user
            })
        })
    })

})

export const { 
    useLoginMutation,
    useRegisterMutation
 } = loginApi