import { useEffect } from "react"


function Input(){
    useEffect(()=>{
        document.getElementById("Sample-input").focus();
    }, []);
    
    return (
        <input id="Sample-input" name="Sample-input" placeholder = "Search Here"/>
    ) 
}


export default Input