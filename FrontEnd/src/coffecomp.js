import {useState} from 'react'
function CoffeeComp()
{
    const [coffeeName,setCoffeeName]=useState(' ')
    const[message,setMessage]=useState(' ')
    return (<div style={{backgroundColor:"aqua",height:"80px",width:"190px"}}>
        Enter Coffe Name <br/>
        <input type='text' onChange={(e)=>{
            setCoffeeName(e.target.value)
        }}/><br/> 
        
        <input type='button' value='save' onClick={()=>{
            console.log(coffeeName)
            setMessage(coffeeName+" is Saved")
        }}/>

        {coffeeName}
        <br/>
        {message}
        </div>)
}

export default CoffeeComp