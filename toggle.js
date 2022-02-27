import { useEffect, useState } from "react";

function Toggle(){
    const[show,setShow]=useState(false);
    return(
        <>
        {show && <Item/>}
        <button type="button" onClick={()=>setShow(!show)}>Show/hide</button>
        </>
    )
}

function Item(){
    function Change(){
        //set the new value 
        setSize(window.innerWidth)
    }
    
    const[size,setSize]=useState(window.innerWidth);
    //due to change in the innerwidth componet re-render and thats why use useEffect to set our new  or current value 
    useEffect(()=>{
        //to make it more recent not on reload
        window.addEventListener('resize',Change);
        //clean up fxn remember in case of toggle to fetch only one data at a time
        return ()=>{
            //clean up = remove all things at upperside 
            //to prevent memory leak
            window.removeEventListener('resize',Change);

        }
    },[])
    return(
        <>
        <h>HELLO WORLD....</h>
        <h>{size} PX</h>
        </>
    )
}

export default Toggle;