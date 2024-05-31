import { createSlice } from "@reduxjs/toolkit";

export const Reducer2= createSlice({
    name:'reducer2',
    initialState:{
        value:0
    },
    reducers:{
        handlelogic:(state)=>{
            // state.value= state.value+1;
            state.value="success";
        }
    }

    
})

export const {handlelogic} = Reducer2.actions;
export const Value =(state)=> state.reducer2.value;
export default  Reducer2.reducer;