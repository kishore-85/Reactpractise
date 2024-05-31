import { configureStore } from "@reduxjs/toolkit";
import { Reducer2 } from "./Reducer1";

export default configureStore({
    reducer:{
        reducer2:Reducer2.reducer
    }
})