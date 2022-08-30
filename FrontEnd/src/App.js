import logo from './logo.svg';
import './App.css';
import OrderDetails from './CoffeeComp/orderdetails';
import AcceptOrder from './CoffeeComp/acceptorder';
import Radium from 'radium'
import Child from './ParentChild/acceptdetails';
import Parent from './ParentChild/custmdetails';
import mybutton from './mybutton';
import Mybutton from './mybutton';
import CoffeeCompp from'./coffecomp';
import Discountcal from './DiscountLab';

import CounterComp from './countercomp';
import DiscountComp from './calculatediscount';
import Register from './component/register';
function App() {return (
<div className='App'>
    
    <Register/>
    </div>
  );
}

export default Radium(App);
