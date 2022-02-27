import { useEffect, useState } from "react";
function Openpage(){
    const[isLoading,setisLoading]=useState(true);
    const[isError,setisError]=useState(false);
    const[user,setUser]=useState('default user')

    //i want to fetch the users;
    const url="https://api.github.com/users";
    useEffect(()=>{
        fetch(url).then((resp)=>{

             if(resp.status>=200 && resp.status<=299){
                return resp.json();
             }else{
                setisLoading(false);
                setisError(true);
                // throw new Error(resp.statusText);

             }
        }).then((user)=>{
        
           const{login}=user;
           setisLoading(false);
           setUser(login);
          
           
            }).catch((error)=>{
                setisError(true)
            })
           
        

        
    },[])


        if(isLoading){
            return<>
            <p>Loading...</p>
            </>
        }
        if(isError){
            return(
                <>
                <p>
                    Error...
                </p>
                </>
            )
        }
         
       return(
           <>
           <p>{user}user name</p>
           </>
       )
}
  export default Openpage;