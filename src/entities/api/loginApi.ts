import { api } from './baseApi'

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


export const loginApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, Login>({
            query: (user) => ({
                url: 'auth/login',
                method: 'POST',
                body: user
            })
        }),
        register: builder.mutation<LoginResponse, Register>({
            query:  (user) => ({
                url: 'auth/register',
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