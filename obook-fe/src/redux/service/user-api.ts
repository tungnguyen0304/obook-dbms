import IResponse from "@/interfaces/response-interface";
import IUser from "@/interfaces/user-interface";
import { axiosBaseQuery } from "@/utils/axios-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";





export  const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/api/users`
    }),
    endpoints: build => ({
        login: build.mutation<IResponse,{email: string, password: string}> ({
            query: (user)=>({
                url:'/login',
                method: 'POST',
                data: {
                    email: user.email,
                    password: user.password
                }
            })
        }),

        signUp: build.mutation<IResponse, IUser> ({
            query: (newUser)=>({
                url:'/sign-up',
                method: 'POST',
                data: {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    password: newUser.password,
                    dob: newUser.dob,
                    sex: newUser.sex
                }
            })
        }),

        getUserByToken: build.query<IResponse,string>({
            query: (token)=>({
                url: `/${token}`,
                method: 'GET'
            })
        }),

        refreshAccessToken: build.mutation<IResponse,string>({
            query: (refreshToken)=>({
                url: '/refresh-access-token',
                method: 'POST',
                data: {
                    refreshToken
                }
            })
        })
    })
})

export const {useLoginMutation, useSignUpMutation, useGetUserByTokenQuery, useRefreshAccessTokenMutation} = userApi;