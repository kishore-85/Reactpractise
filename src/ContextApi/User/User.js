import React, { Children } from "react";
import Purchase from "../Purchase/Purchase";
import { createContext } from "react";
const Userr = createContext();

// const a={fname:'kishore',age:21}
 function User(){
    return(
       
        //   <Userr.Provider value={{fname:'kishore'}}>
        //       <Purchase> </Purchase>
        //   </Userr.Provider>

        <Userr.Provider value={{fname:'kishore'}}>
               <Purchase> </Purchase>
               {/* {Children} */}
        </Userr.Provider>

        
       
    )
}
export default User;
// export default {User,Userr};