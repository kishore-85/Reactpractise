import { useDispatch } from "react-redux";
import{handlelogic} from "./Reducer1"
function Customer(){

    const dispatch = useDispatch();
    return(
        <>
          <button onClick={()=>dispatch(handlelogic())}>Submit</button>
        </>
    )
}

export default Customer;