import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post-slice";
import { postApi } from "./service/post-api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from "./features/user-slice";
import { userApi } from "./service/user-api";

import { combineReducers } from "@reduxjs/toolkit";


const reducer = combineReducers({
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,

    user: userReducer,
    [userApi.reducerPath]: userApi.reducer
})


export const store = configureStore({
    reducer: reducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([postApi.middleware, userApi.middleware]),
    
})

setupListeners(store.dispatch)



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


