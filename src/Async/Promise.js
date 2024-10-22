import { Value } from "../Redux/reduxtry/Reducer1";

function Getprod(){
//---call-bak---//
// function a(call){
//     console.log('1');
//     setTimeout(()=>{
//         console.log('set time out');
//     },1000);
//     call();
// }


// function b(){
//     console.log('fun b')
// }

// a(b)
///---promise---///

// function getproduct(){
//     return new Promise((resolve,reject)=>{
//         let product = true;
//         if(product==true){
//             resolve('product');
//         }
//         else{
//             reject();
//         }
//     })
// }
// getproduct().then(val=>{console.log(val)})
// .catch(()=>console.log('soory'))
 
    return(
        <>
        <p>promise</p>
        </>
    )
}

export default Getprod;