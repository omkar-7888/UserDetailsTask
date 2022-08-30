import { Component } from "react"
export default class Child extends Component {
constructor()
{
        super()
    this.state={
        details: { name: "", email: "", mobNo: 0},
        name:"",
        email:"",
        mobNo:0
    }

this.setName=this.setName.bind(this)
this.setEmail=this.setEmail.bind(this)
this.setMobNo=this.setMobNo.bind(this)
this.setDetailsObject=this.setDetailsObject.bind(this)
}

setName(e)
{
    this.setState({name:e.target.value})
}

setEmail(e)
{
    this.setState({email:e.target.value})
}

setMobNo(e)
{
    this.setState({mobNo:e.target.value})
}

setDetailsObject()
{
    var detailsobj={
        name:this.state.name,
        email:this.state.email,
        mobNo:this.state.mobNo,
    }
    this.setState({details:detailsobj})
    this.props.sendToParent(this.state.details)
}

 render()
 {
    const mydesign = {
        backgroundColor: "blue",
        height:"200px",
        width:"250px",
        color: "black"
    }

      return (<div style={mydesign}>
   Enter Name <br/>
   <input type='text'  onChange={this.setName}/><br/>
   Enter Email <br/>
   <input type='text'  onChange={this.setEmail}/><br/>
   Enter Mobile No <br/>
   <input type='text'  onChange={this.setMobNo}/><br/>
   <input type='button' value="Save Info" onClick={this.setDetailsObject}/>
  </div>)
 }

}