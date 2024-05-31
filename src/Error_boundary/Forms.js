import { useState } from "react";

function Forms(){
const [formval,setformval]= useState({
    fname:'',
    email:'',
    Ph:''
})

const[formerr, setformerr]= useState({})

const myinput= (e)=>{
    console.log(e,'e')
    setformval({...formval,[e.target.name]:e.target.value})
    console.log(formval,'valueset')
}

function mysubmit(e){
   e.preventDefault();
   setformerr(Validite(formval)) 
}

let Validite = (val)=>{
    let err  ={};
    const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!val.fname){
        err.fname= "fname can't be empty"
    }
    else if(val.fname.length<8){
        err.fname="fname should be more than 8 letters"
    }

    if(!val.email){
        err.email= "email can't be empty"
    }
    else if(!regEx.test(val.email) ){
        err.email="Enter proper Email-Id"
    }

    if(!val.Ph){
        err.Ph= "Ph can't be empty"
    }
    else if(val.Ph.length<9){
        err.Ph="Enter proper Ph"
    }
   return err;

}

    return(
        <>
        <form>
            <div>
                <label>Name:</label>
                <input type="text" name="fname" onChange={myinput}></input>
                {
                    formerr.fname &&(<span>{formerr.fname}</span> )
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email"  onChange={myinput}></input>
                {
                    formerr.email &&(<span>{formerr.email}</span> )
                }
            </div>
            <div>
                <label>Ph:</label>
                <input type="number" name="Ph"  onChange={myinput}></input>
                {
                    formerr.Ph &&(<span>{formerr.Ph}</span> )
                }
            </div>
            <button onClick={mysubmit}>Submit</button>
        </form>
        
        </>
    )

}

export default Forms;