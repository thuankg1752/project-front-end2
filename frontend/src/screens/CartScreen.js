import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <>
      <div className="slider-area ">
        <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Cart List</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart_area">
        <section className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Delete Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                {cartItems.length === 0 ? (
                  <>
                    <h2>Your cart is empt</h2>
                    <Link
                      to="/"
                      onClick={checkoutHandler}
                      className="btn_1 checkout_btn_1"
                      disabled={cartItems.length === 0}
                    >
                      Back to home
                    </Link>
                  </>
                ) : (
                  cartItems.map((item) => (
                    <tbody>
                      <tr>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <div className="media-body">
                              <Link to={"/product/" + item.product}>
                                <p>{item.name}</p>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="cupon_text">
                            <button
                              className="btn_1"
                              type="button"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              Delete Cart
                            </button>
                          </div>
                        </td>
                        <td>
                          <h5>${item.price}</h5>
                        </td>
                        <td>
                          <div>
                            <select className
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(item.product, e.target.value)
                                )
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))
                )}
              </table>

              <div className="container">
                <div className="cart_inner">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="checkout_btn_inner float-right">
                <table>
                  <tr>
                    <td>
                      <h5>Subtotal: </h5>
                    </td>
                    <td>
                      <h5>{cartItems.reduce((a, c) => a + c.qty, 0)} items</h5>
                    </td>
                    <td>
                      <h5>
                        $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                      </h5>
                    </td>
                  </tr>
                </table>
                <button
                  onClick={checkoutHandler}
                  className="btn_1 checkout_btn_1"
                  disabled={cartItems.length === 0}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
{
  /*  */
}
export default CartScreen;
