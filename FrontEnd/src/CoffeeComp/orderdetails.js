import { Component } from "react"

import AcceptOrder from "./acceptorder"
import './coffee.css'
export default class OrderDetails  extends Component{

    constructor() {

        super()

        this.state = {

            coffee: { coffeeName: "Black Coffee", price: 20 }

        }

        this.setOrderDetails=this.setOrderDetails.bind(this)

    }



setOrderDetails(orderdata)

{

    this.setState({coffee:orderdata})

}




    render() {

        return ( <div class="mycoffeedesign">

            <p style={{backgroundColor:"red",
            fontSize:"15px",
            borderStyle:"groove"}}>Jpe's Coffee Bar</p>

            <h3> Order Details!!! </h3> {

                this.state.coffee.coffeeName + " " + this.state.coffee.price

            }

<AcceptOrder sendToParent={this.setOrderDetails}/>

            </div>)      

        }

    }