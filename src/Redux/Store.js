import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './reducer/CounterSlice'

export default configureStore({
    reducer:{
       reducer1: CounterReducer
    }

});