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
        })
    })
})

export const { useLoginMutation } = loginApi