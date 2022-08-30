import { useState } from "react"
import axios from 'axios'
import { Button, Card } from "@mui/material"
import { Paper } from "@mui/material"
import { Link } from "react-router-dom"

function Register(){
    const [firstName,setfirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [emailId,setEmailId]=useState('')
    const [mobileNo,setMobileNo]=useState(0)
    const [userType,setUserType]=useState('')
    const [status,setStatus]=useState('') 
    const[msg,setMsg]=useState('')
       return(<>
         <div style={{position:"fixed",backgroundPosition:'center',backgroundSize:'cover',backgroundColor:'burlywood',backgroundRepeat:'no-repeat',width:'100vw',height:'100vh'}}>
    {/* <div style={{backgroundColor:"teal",height:800}}> */}
    <div  style={{position:"relative",top:20,left:18,margin:"auto",lineHeight:3.5,width:290 }}>
        <Card elevation={0} style={{position:'relative',backgroundColor:'transparent' }}>
    <div style={{position:"relative",top:-5,left:22,color:"white"}}>
        <h1 > User Registration </h1>
        </div>
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="firstName"   onChange={(e)=>{
            setfirstName(e.target.value)
        }}/> <br/>
        </div>

        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="lastName" onChange={(e)=>{

        setLastName(e.target.value)
          
        }}/> <br/>
        </div>
       

        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='email' placeholder="emailId"  onChange={(e)=>{
          setEmailId(e.target.value)
        }}/> <br/>
        </div>

     
        <div style={{position:"relative",left:26}}>
        <input style={{position:"relative",width:230,height:30,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="Mobile NO" onChange={(e)=>{
           setMobileNo(e.target.value)
            
        }}/> <br/>
        </div>
        <div style={{position:"relative",left:26}}>
        <select style={{position:"relative",width:235,height:35,top:-15,borderRadius:'10px',fontSize:'17px',boxShadow:'1px 2px 2px'}} type='text' placeholder="UserType" onChange={(e)=>{setUserType(e.target.value)}}>
        <option > User Type</option>
            <option value='External'>External</option>
            <option value='Internal'>Internal</option>
            
            </select> <br/>
        </div>
        <div style={{position:"relative",left:26}}>
        
        </div>


      <Button style={{position:"relative",left:65,top:-20,width:160,height:35,backgroundColor:'black',color:"white"}} variant="contained" data-testid="submit" onClick={()=>{
            var user={
               "firstName":firstName,
               "lastName":lastName,
               "emailId":emailId,
               "mobileNo":mobileNo,
               "userType":userType
            }
            
              
              
                axios.post('http://localhost:8080/addUser',user)
                .then((res)=>{
                    // setMsg(res.data)
                    
                    // if(msg.startsWith("User"))
                    setStatus(res.data)
                })
               
              
             
              
         
          
}}>


    REGISTER 
</Button>


 <div style={{position:"relative",left:41,top:-40,fontWeight:'bold'}}>
    {status}
    </div>
        </Card> 
        </div>
        {/* </div>  */}
    </div>)

    </>)
}

export default Register