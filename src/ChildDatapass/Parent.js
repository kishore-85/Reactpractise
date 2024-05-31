import Decrement from "./Decrement";
import Display from "./Display";
import Increment from "./Increment";
import {useState} from "react" 

function Parent(){

    const [data,setdata] = useState(0);
    function myIncrement(){
        setdata(data + 1);
        console.log(data,'data')
    }

    function myDecrement(){
        setdata(data-1);
    }
    return (
        <>
        <p>PArent!{data}</p>
        <Increment onClickFunction={myIncrement}> </Increment>
        <Decrement  onClickFunction={myDecrement}> </Decrement>
        <Display a={data}></Display>
        </>
    )
}

export default Parent;