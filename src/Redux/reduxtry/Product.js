
import { useSelector } from "react-redux";
import {Value} from "./Reducer1";
function Product(){
    // const get = useSelector((state)=>state.reducer2);
    const get = useSelector(Value);
    console.log('product ')
    return(
        <>

        <p>{get}value</p>
        </>
    )
}
export default Product;