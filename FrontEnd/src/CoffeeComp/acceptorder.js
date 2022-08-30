import { Component } from "react"
export default class AcceptOrder extends Component {
constructor()
{
        super()
    this.state={
        coffee: { coffeeName: "", price: 0},
        name:"",
        pr:""
    }

this.setCoffeeName=this.setCoffeeName.bind(this)
this.setCoffePrice=this.setCoffePrice.bind(this)
this.setCoffeObject=this.setCoffeObject.bind(this)
}

setCoffeeName(e)
{
    this.setState({name:e.target.value})
}

setCoffePrice(e)
{
    this.setState({pr:e.target.value})
}

setCoffeObject()
{
    var coffeeobj={
        coffeeName:this.state.name,
        price:this.state.pr
    }
    this.setState({coffee:coffeeobj})
    this.props.sendToParent(this.state.coffee)
}

 render()
 {
     const mydesign={
         backgroundColor:"burlywood",
         height:"125px",
         width:"200px",
         color:"brown"
     }

    
 
      return (<div style={mydesign}>
            Enter Coffee Name <br/>
   <input type='text'  onChange={this.setCoffeeName}/><br/>
            Enter Price <br/>
   <input type='text'  onChange={this.setCoffePrice}/><br/>
   <input type='button' value="place order" onClick={this.setCoffeObject}/>
  </div>)
 }
}