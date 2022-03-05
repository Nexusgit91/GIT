import './index.css';
import {data} from './Data/data'
import {useState,useContext,createContext} from 'react';


//usecontext returns two components 
// 1.Provider create -Context(defaultvalue)
// 2.consumer
 const PersonContext=createContext();

function ContextAPI(){
    const [people,setPeople]=useState(data);
    function Remove(id){
        setPeople((people)=>{
            return (
                people.filter((person)=>person.id!==id)
            )
        })
        
    }
    return (
        <PersonContext.Provider value={{Remove,people}}>
            <h  className="header"> List of Items/UseContext</h>
            <hr style={{width:"70%"}}/>
            
                
            <List  />

            </PersonContext.Provider>
         
          
       
       
        
           
     
    
      
   
    
    )
  
}

function List(){
    //it is an object
    const PeopleData=useContext(PersonContext);

    return(
        <>
  
        {
            PeopleData.people.map(person=>{
                //inject the array into the object
                return <SinglePerson person={person} key={person.id} />
            })
        }
        </>
    )
}

function SinglePerson({person}){
  const {id,name}=person;  
    //to use here our context 
    const {Remove}=useContext(PersonContext);
    
    return(
        <>
        <div style={{display:"flex",justifyContent:"center" }}>
            <h style={{color:"blue",fontSize:"50px", display:"flex",justifyContent:"center",margin:"20px"}}> {id}.{name}  </h>

            <button style={{backgroundColor:"red" , borderRadius:"20px",  width:"50px" ,height:"60px" }} type="button"  onClick={()=>Remove(id)}>x</button>
        </div>
        </>
        

        
        
    )
}




export default ContextAPI;