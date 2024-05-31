import React,{useState} from "react";

function UseStateEx2(){
    const [cval, setval]= useState(
       {
           fname:'',
           ph:'',
       }
      
    );

    const myFun = (e)=>{
        // console.log(e,'1');
        console.log(e.target.name);
        console.log(e.target.value);        
        // console.log(cval,'cval before set')

        const{name, value}= e.target; 
        setval({...cval,[name]:value})  //step-1
        
        
        // setval({[e.target.name]:e.target.value})//step2


        // let a= e.target.name;
        // let b= e.target.value;     //step-3  

        // setval({[a]:b})


        // setval(d =>({...cval,a:b}),)

        console.log(cval,'cvalafetrset')


        

        
    };

        return(
            <>
            <form>
                {/* <p>{cval}</p> */}
                Name: <input name="fname" type="text"  onChange={myFun} />  
                ph: <input name="ph" type="number"  onChange={myFun}/> 
            </form>
            </>
        )


}

export default UseStateEx2;