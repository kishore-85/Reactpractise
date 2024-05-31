import {increment,decrement,selectCount} from './CounterSlice';
import {useDispatch, useSelector} from 'react-redux';
function Counter(){
    const dispatch = useDispatch();
    const countval = useSelector(selectCount);
    return(
        <>
        <button onClick={()=>dispatch(increment())}>Add</button>

        <p>Value{countval}:</p>
        
        <button onClick={()=>dispatch(decrement())}>subtract</button>
        </>
    )
}

export default Counter;