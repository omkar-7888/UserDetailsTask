import {useState,useEffect} from 'react'
function CounterComp()
{
    const [counter,setCounter]=useState(0)

            useEffect(()=>{
                setCounter(counter+1)
            },[])
            return <div>
                <input type='button' value='increment'

                onClick={()=>{

                    setCounter(counter+1)
                }}/>
    {counter}
            </div>
}
export default CounterComp