import { useState } from "react"
//short-circuits evaluation
function Ternary(){
    const[text,setText]=useState('');
    // const firstvalue=text || "hello world";
    // const secondvalue=text && "hello world";
    const[isError,setisError]=useState('false')
    return(
        <>
        <h>
            {text|| "john doe"}
            {text &&  <h1>hello world</h1> }
            {!text && <h1>hello worlds</h1>}
         {isError && <div>Error...</div>}
        </h>
        <h>{isError?(<div>Error...</div>):(
            <div>there is no error</div>
        )}</h>
        <button type="button" onClick={()=>setisError(!isError)}>Click</button>
        </>
    )
}
export default Ternary;