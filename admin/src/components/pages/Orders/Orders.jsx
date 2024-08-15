import React from 'react'
import './Orders.css'
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { assets } from '../../../assets/assets'
const Order = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
      try {
          const response = await axios.get(`${url}/api/order/list`);
          if (response.data.success) {
              setOrders(response.data.data);
              console.log(response.data.data);
          } else {
              toast.error("Error fetching orders.");
          }
      } catch (error) {
          console.error("Error fetching orders:", error);
          toast.error("An error occurred while fetching orders.");
      }
  };


const statusHandler = async (event,orderId)=>{
const response = await axios.post(url+"/api/order/status",{
  orderId,
  status:event.target.value
})
if(response.data.success){
 await fetchAllOrders()
}
}


  useEffect(() => {
      fetchAllOrders();
  }, []);
  return (
    <div className='order add'>
  <h3>Order Page</h3>
  <div className='order-list'>
    {orders.map((order, orderIndex) => (
      <div key={orderIndex} className='order-item'>
        <img src={assets.parcel_icon} alt='Parcel Icon'/>
        <div>
          <p className='order-item-food'>
            {order.items.map((item, itemIndex) => {
              if (itemIndex === order.items.length - 1) {
                return `${item.name} X ${item.quantity}`;
              } else {
                return `${item.name} X ${item.quantity}, `;
              }
            })}
          </p>
          <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
          <div className='order-item-address'>
            <p>{order.address.street+","}</p>
            <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
           </div>
           <p className='order-item-phone'>{order.address.phone}</p>
        </div>
        <p>Items:{order.items.length}</p>
        <p>${order.amount}</p>

        <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
          <option value="Food Processing">Food Processing</option>
          <option value="Out For Delivery">Out For Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    ))}
  </div>
</div>

  )
}

export default Order
