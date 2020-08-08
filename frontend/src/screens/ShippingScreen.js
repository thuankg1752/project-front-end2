import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutStep";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
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
                    <h2>Shipping</h2>
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
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="login_part" onSubmit={submitHandler}>
              <div className="container">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <form
                      className="row contact_form"
                      action="#"
                      method="post"
                      noValidate="noValidate"
                    >
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="address">Address</label>
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          id="address"
                          placeholder="address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="city">City</label>
                        <input
                          className="form-control"
                          type="text"
                          id="city"
                          name="city"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                          className="form-control"
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          placeholder="Comfirm Password"
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <label htmlFor="country">Country</label>
                        <input
                          className="form-control"
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Comfirm Password"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn_3">
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
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

export default ShippingScreen;
