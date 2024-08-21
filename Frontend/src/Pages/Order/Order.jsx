import './Order.css'
import design from '../../assets/chilli_design_vid2.mp4';
import Explore from '../../Components/Explore/Explore';
import OrderItems from '../../Components/OrderItems/OrderItems';
import { useState } from 'react';

const Order = () => {
  const [category,setCategory] = useState("All");
  return (
    <div className='order'>
        <div className="order-header-vid">
            <video src={design} alt="vid" autoPlay loop muted/>
        </div>

        <Explore category={category} setCategory={setCategory}/>
        <OrderItems category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Order