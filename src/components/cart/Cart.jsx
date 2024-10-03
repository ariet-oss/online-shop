import React, { useState, useEffect } from "react";
import './cart.scss'
import { useParams } from "react-router-dom";
import axios from "axios";
import dropUp from '../../assets/image/Drop-Up-small.png'
import dropDown from '../../assets/image/Drop-Down-small.png'
import { useSelector,useDispatch } from "react-redux";
import {  incQunatity,incQunatityIn } from "../../locales/redux/cart/cart";
import { Link } from "react-router-dom";
import { addCheck } from "../../locales/redux/checkOut/checkOut";
const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement";
function Cart() {
  const dispatch = useDispatch()
  const{list}= useSelector((state)=> state.cart)
  let b =  list.reduce((sub,item)=> sub + item.price*item.quantity,0) 
  console.log(b);
  const { id } = useParams();
  const [data2, setData2] = useState({});
  const [image, setImage] = useState(""); 
  async function getProductById() {
    try {
      const res = await axios.get(`${API}/${id}`);
      setData2(res.data);
      setImage(res.data.imageUrl);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductById();
  }, []);
  return (
    
    <div className="allBlocksCart">
        <div className="tovarCartBlocks">
            <div className="TovarCartBlock">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quanity</h4>
            <h4>Subtotal</h4>
            </div>
            {list.map((data)=>(
              <div className="TovarCartBlock">   
                        <div className="products">
                    <img src={data.imageUrl} alt="" />                
                <span >{data.title}</span> 
                </div>                
                <span>${data.price}</span>
                <div className="counterUp"><div className="counter">
                  <span >{data.quantity}</span>
                  <div className="buttonsPrice"> 
                    <img onClick={()=> dispatch(incQunatity(data.id))} src={dropUp} alt="" />
                    <img onClick={()=> dispatch(incQunatityIn(data.id))} src={dropDown} alt="" />
                    </div>                    
                </div></div>
                <span>${data.quantity * data.price} <img src=""   alt="" /></span>
                </div>  ))}
        </div>
            <div className="buttonsLR"> 
              <Link to={'/'}>
                <button>Return to shop</button>
                </Link>
                <button>Update Cart</button>
            </div>ч
        <div className='CartShopBottom'>
          <div className="registrCart">
              <input type="text" placeholder='Coupon Code' />
              <button>Apply Coupon</button>
          </div>
          <div className="cartShopping">
              <h5>Cart Total</h5>
              </div>
              <div className="alignCart">
                <div className="span1">   <span>Subtotal:</span><span>${b}</span> </div>                            
<div className="span1">    
                  <span>Shipping:</span><span>$500</span>
                  </div>
                  <div className="span1">   
                    <span>Price:</span><span>${b + 500}</span>
                     </div>
              </div>
              <Link to={'checkOut'}><button onClick={dispatch(addCheck(list))}>procees to checkout</button></Link>

          </div>
      </div>
  )
}
export default Cart