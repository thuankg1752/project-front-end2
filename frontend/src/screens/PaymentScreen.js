import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutStep";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };
  return (
    <>
      <div>
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Payment</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="preLoaderStart">
            <img src="img/products/gif/loading-arrow.gif" />
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="form">
              <form onSubmit={submitHandler}>
                <ul className="form-container">
                  <li>
                    <h2 className="paymentGroup">Payment</h2>
                  </li>

                  <li>
                    <div className="paymentGroup">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          Paypal
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          Test 1
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          Test 2
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            class="form-check-input"
                            name="optradio"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          Test 3
                        </label>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="paymentGroup  btnPadding">
                      <button type="submit" className="btn_3">
                        Continue
                      </button>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            {/* <!--? Shop Method Start--> */}
            <div className="shop-method-area">
              <div className="container">
                <div className="method-wrapper">
                  <div className="row d-flex justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-method mb-40">
                        <i className="ti-package"></i>
                        <h6>Free Shipping Method</h6>
                        <p>
                          aorem ixpsacdolor sit ameasecur adipisicing elitsf
                          edasd.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-method mb-40">
                        <i className="ti-unlock"></i>
                        <h6>Secure Payment System</h6>
                        <p>
                          aorem ixpsacdolor sit ameasecur adipisicing elitsf
                          edasd.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single-method mb-40">
                        <i className="ti-reload"></i>
                        <h6>Secure Payment System</h6>
                        <p>
                          aorem ixpsacdolor sit ameasecur adipisicing elitsf
                          edasd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Shop Method End--> */}
          </>
        )}
      </div>
    </>
  );
}

export default PaymentScreen;
