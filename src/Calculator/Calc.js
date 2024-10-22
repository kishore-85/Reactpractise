import { useState } from "react";


function Calculator(){  
  let value=0;
  let result =0;
  let [output,setOutput] =useState(null)
  let arr=[]

    let get_num = function(e){

     value = value+e;
     console.log(value,'val')
      
      // if(!(e=='+'||e=='-'||e=='/'||e=='%'||e=='=')){
      //   value =e;

      //   console.log(e,'e-inside')
      //   // arr.push(e);
      //   // console.log(arr,'arr')
      // }
      // else{
      //   // console.log(e,'e-else')
      //   switch(e){
      //     case ('+'):add();
      //     break;
      //     case ('-'):sub();
      //     break;
      //     case ('/'):div();
      //     break;
      //     case ('%'):percentage();
      //     break;
      //     case ('='):display();
      //     break;
      //   }
      // }
        
    }
function calc(){
  console.log(value.split(''))
  // parseInt(value)
  // console.log(value,'calc')
}
    // function add(){
    //   result =result+value;
      
    //   // setOutput(...result,result)
    //   console.log(result,'result')
    //   console.log('add fun works');

    // }

    // function sub(){
    //   result= result-value;
     
    //   console.log('sub fun works')
    // }

    // function div(){
    //   result= result/value;
      
    //   console.log('div fun works')
    // }

    // function percentage(){
    //   result= result/value;
     
    //   console.log('percentage fun works')
    // }
    // function display(){
    //   result= result+value;
    //   // value=0;
    //   console.log(result,'=')
    //   console.log('display fun works')
    // }
    
    return(
        <>
        <div class='container'>
            <h2>Calculator</h2>
            <div id='inner_con'>
              <button class="btn" onClick={()=>{get_num('1')}}>1</button>
              <button class="btn" onClick={()=>{get_num('2')}}>2</button>           
              <button class="btn" onClick={()=>{get_num('3')}}>3</button> <br></br>
              <button class="btn" onClick={()=>{get_num('4')}}>4</button> 
              <button class="btn" onClick={()=>{get_num('5')}}>5</button>
              <button class="btn" onClick={()=>{get_num('6')}}>6</button><br></br>
              <button class="btn" onClick={()=>{get_num('7')}}>7</button>
              <button class="btn" onClick={()=>{get_num('8')}}>8</button>
              <button class="btn" onClick={()=>{get_num('9')}}>9</button><br></br>
              <button class="btn_2" onClick={()=>{get_num('+')}}>Add</button>
              <button id="zero" onClick={()=>{get_num('0')}}>0</button>
              <button class="btn_2" onClick={()=>{get_num('-')}}>Sub</button><br></br>
              <button class="btn_2" onClick={()=>{get_num('/')}}>/</button>
              <button id="zero" onClick={()=>{get_num('%')}}>%</button>
              <button class="btn_2" onClick={calc}>Result</button>
            </div>
          <h2>Result:{result}</h2>
        </div>
          
        </>
    )
}
export default Calculator;
