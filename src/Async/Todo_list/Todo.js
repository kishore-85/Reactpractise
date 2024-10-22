import { useState ,useEffect} from "react";

let z=[
    {id:1,
    fname:'kishore',
    roll_no:85
   },
    {id:2,
     fname:'s.kishore',
     roll_no:86
    },
     {id:3,
     fname:'p.kishore',
     roll_no:87
    },
     {id:4,
     fname:'kowsik',
     roll_no:88
    },

]
function Todo(){
    let a;
    const [prod,setprod]=useState([])
    const [formval,setformval]=useState({prod:''})
   
    

    function product(e){
         console.log(e.target.name,'name',e.target.value,'value');
         setprod({...formval,[e.target.name]:e.target.value});
        //  arr.push(prod);
    }
    
   function add(e){
       setprod([...prod,e])
    
     console.log(prod,'prod')
    
   }
    

    
    return(
        <>
               <p>Todo-list</p>
               <form>
                   <input type="text" name="prod" onChange={product}></input>
               </form>
               <button onClick={add}>Add</button>
             
            <div>
                <ul>
                   {
                    a=    prod.map((name,index)=>(
                           <li key={index}>hi{name.button}</li>
                       ))
                  
                   }
                </ul>
            </div>

              {/* <div>
                {
                    // z.map((x,y)=>{
                    //      <p key={x.id}>{x.roll_no}</p>
                    // }                   
                    // )

                    z.map((name,index)=>(
                             <p key={name.id}>{name.roll_no}</p>
                                  
                     ) )
                }
                 
              </div> */}
        </> 
    )
}
export default Todo;