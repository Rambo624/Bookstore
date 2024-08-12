import { createSlice } from "@reduxjs/toolkit";



const bookSlice=createSlice({
    name:"book",
    initialState:{
        isHomePage:true
    },
    reducers:{
        notHomePage:(state)=>{
            state.isHomePage=false
        },
        HomePage:(state)=> {
            state.isHomePage=true
        }
    }
})


export default bookSlice.reducer
export const {notHomePage,HomePage}=bookSlice.actions