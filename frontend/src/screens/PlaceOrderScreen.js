import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutStep from "../components/CheckoutStep";
function PlaceOrderScreen(props) {


  const cart = useSelector((state) => state.cart);
  const { cartItems,shipping,payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  }
  if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const dispatch = useDispatch();
 
  useEffect(() => {
    

  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return <div>
    <CheckoutStep step1 step2 step3 step4 ></CheckoutStep>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
            {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
              <div>
                Price
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product"/>
                    </div>
                    <div className="cart-name">
                      <div>
                      {item.name}
                        <Link to={"/product/" + item.product}>
                          
                        </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      ${item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>

      
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="btn_3" >Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div></div>
          </li>
          <li>
            <div>Shipping</div>
            <div></div>
          </li>
          <li>
            <div>Tax</div>
            <div></div>
          </li>
          <li>
            <div>Order Total</div>
            <div></div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}
export default PlaceOrderScreen;
