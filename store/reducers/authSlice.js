import { createSlice } from "@reduxjs/toolkit";



const initialState={
    isLogIn:true,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        handelLogIn:(state)=>{
            state.isLogIn=true;
        },
        handelLogout:(state)=>{
            state.isLogIn=false;
        },
    },
})
export const {handelLogIn,handelLogout} =authSlice.actions
export default authSlice.reducer;