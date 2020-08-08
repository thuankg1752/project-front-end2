import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <>
      {loading ? (
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Successful</h2>
                    <h3>
                      CLick <Link to="/signin">HERE</Link> to signin
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>Register</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="login_part" onSubmit={submitHandler}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="login_part_text text-center">
                    <div className="login_part_text_iner">
                      <h2>New to our Shop?</h2>
                      <p>
                        There are advances being made in science and technology
                        everyday, and a good example of this is the
                      </p>
                      <Link className="btn_3" to="/about">
                        About us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="login_part_form">
                    <div className="login_part_form_iner">
                      <h3>
                        Welcome ! <br></br>
                        Please Sign up now
                      </h3>
                      <form
                        className="row contact_form"
                        action="#"
                        method="post"
                        noValidate="noValidate"
                      >
                        <div className="col-md-12 form-group p_star">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            className="form-control"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            className="form-control"
                            type="Password"
                            id="rePassword"
                            name="rePassword"
                            placeholder="Comfirm Password"
                            onChange={(e) => setRePassword(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="creat_account d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="f-option"
                              name="selector"
                            />
                            <label htmlFor="f-option">
                              I accept with the terms
                            </label>
                          </div>
                          <button
                            type="submit"
                            value="submit"
                            className="btn_3"
                          >
                            Register Now
                          </button>
                          <p className="lost_pass">
                            Already have an account? Sign in
                            <Link
                              to={
                                redirect === "/"
                                  ? "signin"
                                  : "signin?redirect=" + redirect
                              }
                            >
                              <p className="lost_pass">&nbsp;HERE</p>
                            </Link>
                          </p>{" "}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default RegisterScreen;
