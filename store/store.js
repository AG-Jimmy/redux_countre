import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "./reducers/authSlice";
import counterReducer from "./reducers/counter";
 

export const store =configureStore({
    reducer:{
        auth:authReducer,
        counter:counterReducer,
    },

});