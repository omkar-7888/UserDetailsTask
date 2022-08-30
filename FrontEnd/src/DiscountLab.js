import {useState} from "react"; 
  function Discountcal(){

    const [price, setPrice]=useState('')
    const [discount, setDiscount]=useState('') 
    return (<div style={{backgroundColor:"aqua",height:"100px",width:"250px"}}> 
    
    Enter the price <br/>
     <input type='text' onChange={(e)=>{setPrice(e.target.value)}}/><br/>
      <input type='button' value='save' onClick={()=>{setDiscount((price-price*(15/100))+" Discout Price")}}/> 
    
    {discount}

    </div>)
}
    
 export default Discountcal;