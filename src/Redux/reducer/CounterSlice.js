import {createSlice} from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name:'reducer1',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }

})

export const {increment,decrement} = CounterSlice.actions; 

export const selectCount = (state)=> state.reducer1.value;

export default CounterSlice.reducer;