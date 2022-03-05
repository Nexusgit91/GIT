import { useReducer, useState } from "react";
import Modal from "./modal";

function reducer(state,action){
    //update the default value
    if(action.type==='TESTING'){
        const newPeople=[...state.people,action.payload];
        return{
            ...state,
            people:newPeople,
            isModalOpen:true,
            ModalContent:"helllllo there",
            
            
        }
        
        
    }
    if(action.type==="Null"){
        return {
            ...state.people,isModalOpen:true,
            ModalContent:"null value",
        }
    }

    if(action.type==="REMOVE"){
        //null value or array
        //call back fxn return 
        const newPeople=state.people.filter((person)=>
            person.id !== action.payload );
        return{
            ...state.person , people:newPeople
        }
    }
    throw new Error ('not found')


   
}

const defaultState={
    people:[],
    isModalOpen:false,
    ModalContent:"",
}

function Reducer(){
    const[name,setName]=useState('');
    const[state,dispatch]=useReducer(reducer,defaultState);
    function SubmitHandler(e){
        e.preventDefault();

        if(name){
            const newItem={
                id:new Date().getTime().toString(),
                name
            }
            dispatch({type:'TESTING',payload:newItem})
         
        }else{
            dispatch({type:"Null"})
        }
        // DISPATCH-WHEN AND WHAT

       
    }
    return(
        <>
       
        <h1>List  {state.isModalOpen && <Modal ModalContent={state.ModalContent}/>}</h1>
        <form onSubmit={SubmitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
        {
            state.people.map((person)=>{
                const{name,id}=person;
                return(
                    <div id={id}>
                           <h>{name}</h>
                           <button onClick={()=>dispatch({target:"REMOVE"})} type="button">X</button>
                         
                         

                    </div>
                )
            })
        }
        </>
        
    )
}
export default Reducer;