import {Component} from "react"
import Child from "./acceptdetails"
import './customer.css'

export default class Parent extends Component{
    constructor() {
        super()
        this.state = {
            details: { name: " ", email: " ", mobNo: 0 }
            } 
           this.setParent=this.setParent.bind(this)
       }


        setParent(orderdata)
        {
            this.setState({details:orderdata})
        }
            
            render() { 
                return ( <div className="mycdesign"> 
                 <p style={{backgroundColor:"red",
                            fontSize:"15px",
                             borderStyle:"groove"}}>!!Welcome!!</p>
                 <h3> Customer Details </h3>
                 { this.state.details.name + " " + this.state.details.email+" "+this.state.details.mobNo }
<Child sendToParent={this.setParent}/>
                 </div>)  
            }
 }