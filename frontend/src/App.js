import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AboutScreen from "./screens/AboutScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { useSelector } from "react-redux";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from './screens/ProfileScreen';
// import logo from "../public/img/logo/logo.png";
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <header>
        {/* <!-- Header Start --> */}
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper">
                {/* <!-- Logo --> */}
                <div className="logo">
                  <Link to="/">
                    <img src="/img/logo/logo.png" alt="" />
                  </Link>
                </div>
                {/* <!-- Main-menu --> */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Shop</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li className="hot">
                        <a href="#">Latest</a>
                        <ul className="submenu">
                          <li>
                            <a href="shop.html"> Product list</a>
                          </li>
                          <li>
                            <a href="product_details.html"> Product Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            {userInfo ? (
                              <Link to="/profile">{userInfo.name}</Link>
                            ) : (
                              <Link to="/signin">Sign In</Link>
                            )}
                          </li>
                          <li>
                          <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            <a href="elements.html">Element</a>
                          </li>
                          <li>
                            <a href="confirmation.html">Confirmation</a>
                          </li>
                          <li>
                            <a href="checkout.html">Product Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- Header Right --> */}
                <div className="header-right">
                  <ul>
                    <li>
                      <div className="nav-search search-switch">
                        <span className="flaticon-search"></span>
                      </div>
                    </li>
                    <li>
                      {userInfo ? (
                        <Link to="/profile">
                          {" "}
                          <span className="flaticon-user">
                            &nbsp;{userInfo.name}
                          </span>
                        </Link>
                      ) : (
                        <Link to="/signin">
                          <span className="flaticon-user"></span>
                        </Link>
                      )}
                    </li>
                    <li>
                      <Link to="/cart">
                        <span className="flaticon-shopping-cart"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Mobile Menu --> */}
              <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
      <main>
        <Route path="/about" component={AboutScreen}></Route>
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/shipping" component={ShippingScreen}></Route>
        <Route path="/payment" component={PaymentScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/products" component={ProductsScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/" exact={true} component={HomeScreen}></Route>
      </main>
      <footer>
        {/* <!-- Footer Start--> */}
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    {/* <!-- logo --> */}
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          Asorem ipsum adipolor sdit amet, consectetur
                          adipisicing elitcf sed do eiusmod tem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#"> Offers & Discounts</a>
                      </li>
                      <li>
                        <a href="#"> Get Coupon</a>
                      </li>
                      <li>
                        <a href="#"> Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>New Products</h4>
                    <ul>
                      <li>
                        <a href="#">Woman Cloth</a>
                      </li>
                      <li>
                        <a href="#">Fashion Accessories</a>
                      </li>
                      <li>
                        <a href="#"> Man Accessories</a>
                      </li>
                      <li>
                        <a href="#"> Rubber made Toys</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="#">Frequently Asked Questions</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Report a Payment Issue</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Footer bottom --> */}
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-md-7">
                <div className="footer-copy-right">
                  <p>
                    l
                    {/* ink back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright &copy; 2020
                      
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-5">
                <div className="footer-copy-right f-right">
                  {/* <!-- social --> */}
                  <div className="footer-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/sai4ull">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
      {/* <!--? Search model Begin --> */}
      <div className="search-model-box">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-btn">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Searching key....."
            />
          </form>
        </div>
      </div>
      {/* <!-- Search model end --> */}
    </BrowserRouter>
  );
}

export default App;
