import {Component} from 'react'
import Radium from 'radium'

class MyButton extends Component{
    render(){ 
         const style={
        backgroundColor:"Blue",
        ':hover':{
            backgroundColor:"green"
        }
    }
    return ( <div> 
        <button style={style}> Hello User</button> </div>)
        }

   
}
export default Radium(MyButton)
