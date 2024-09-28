import { apiSlice } from './apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                };
            }
        }),

        logoutApi: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        }),
        registration: builder.mutation({
            query: (data) => ({
                url: '/auth/user-register',
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useLoginMutation, useLogoutApiMutation, useRegistrationMutation } = authApiSlice;
