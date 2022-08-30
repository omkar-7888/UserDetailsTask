import {useState, useEffect} from 'react'

function DiscountComp(){
    const[price, setPrice]=useState(0)
    const[discount, setDiscount]=useState(0)

    useEffect(()=>{setDiscount(price*20/100)},[price])

    return <div>
        Enter Price <br/>
        <input type='text' onChange={(e)=>{setPrice(e.target.value)}}/>
        {price}<br/>
        {discount}
    </div>
}
export default DiscountComp;