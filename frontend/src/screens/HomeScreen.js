import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const {products,loading,error}=productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
    
    }
  }, [])
  return loading ? (
    // <!--? Preloader Start -->
    <div className="preLoaderStart"><img src="img/products/gif/loading-arrow.gif"/></div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      {/* <!--? slider Area Start --> */}
      <div className="slider-area ">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height d-flex align-items-center slide-bg">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div className="hero__caption">
                    <h1
                      data-animation="fadeInLeft"
                      data-delay=".4s"
                      data-duration="2000ms"
                    >
                      Select Your New Perfect Style
                    </h1>
                    <p
                      data-animation="fadeInLeft"
                      data-delay=".7s"
                      data-duration="2000ms"
                    >
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat is aute
                      irure.
                    </p>
                    {/* <!-- Hero-btn --> */}
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                      data-duration="2000ms"
                    >
                      <a href="industries.html" className="btn hero-btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <div
                    className="hero__img"
                    data-animation="bounceIn"
                    data-delay=".4s"
                  >
                    <img
                      src="/img/hero/msi-gaming-series-dragon-logo.png"
                      alt=""
                      className=" heartbeat"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- slider Area End--> */}
      

      <div className="popular-items section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70 text-center">
                <h2>Popular Items</h2>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="row products">
            {products.map((product) => (
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                key={product._id}
              >
                <div className="single-popular-items mb-50 text-center">
                  <div className="popular-img">
                    <Link to={"/product/" + product._id}>
                      <img src={product.image} alt="" />
                    </Link>

                    <div className="img-cap">
                    <Link to={"/product/" + product._id}><span>Product Details</span></Link>
                    </div>
                    <div className="favorit-items">
                      <span className="flaticon-heart"></span>
                    </div>
                  </div>
                  <div className="popular-caption">
                    <h3>
                      <Link to={"/product/" + product._id}>{product.name}</Link>
                    </h3>
                    <span>$ {product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Button --> */}
          <div className="row justify-content-center">
            <div className="room-btn pt-70">
              <Link to="/" className="btn view-btn1">
                View More Products
              </Link>
            </div>
          </div>
        </div>
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
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-unlock"></i>
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-method mb-40">
                    <i className="ti-reload"></i>
                    <h6>Secure Payment System</h6>
                    <p>
                      aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Shop Method End--> */}
    </>
  );
}

export default HomeScreen;
