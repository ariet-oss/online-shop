import React from 'react'
import banks from '../../assets/image/Frame834.png'
import './checkOut.scss'
import { useSelector,useDispatch } from "react-redux";
import {  incQunatity,incQunatityIn } from "../../locales/redux/checkOut/checkOut";
function CheckOut() {
  const dispatch =useDispatch()
  const{check}= useSelector((state)=> state.checkOut)
  return (
    <div className='CheckOut'>
          
        <div className="columnCheckOut1">
                      <h3>Billing Details</h3>
<span>First Name</span>
      <input type="text"/>
<span>Company Name</span>
      <input type="text"/>  
      <span>Street Address</span>
      <input type="text"/>
      <span>Apartment, floor, etc. (optional)</span>
      <input type="text"/>
      <span>Town/City</span>
      <input type="text"/>
      <span>Phone/Number</span>
      <input type="text"/>
      <span>Email Address</span>
      <input type="text"/>
      <div className="verify">
         <input type='checkbox'></input>
      <span>Save this information for faster check-out next time</span>
     
      </div>
      </div>
<div className="columnCheckOut2">
 <div className="alignCheckOunt0Main">
  {check.map((item=>(
       <div className="alignCheckOunt0">
      <img src={item.imageUrl} alt="" />
      <h3>{item.title}</h3>
      <span className='quantity'>{item.quantuty}</span>
      <span>{item.price}</span>
  </div>
    )))

    }</div>
  
      
    <div className="alignCheckOunt1">                     
   <input type="radio" name="Bank" id="Bank" /><span>Bank</span>
<input type="radio" name="bank" id="" /><img src={banks} alt="" />
</div>

<div className="alignCheckOunt2">
    <input  placeholder='Coupon Code'></input>
    <button>Apply Coupon</button>
    <button>Place Order</button>
    </div>

</div>

    </div>
  )
}

export default CheckOut
