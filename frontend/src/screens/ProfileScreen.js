import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout, update } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateReducer } from "../reducers/userReducers";

function ProfileScreen(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector((state) => state.myOrderList);
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    return () => {};
  }, [userInfo]);

  return (
    <>
      <div className="padding_bottom">
        <div className="slider-area ">
          <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Profile User</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* profile */}

      <form className="login_part" onSubmit={submitHandler}>
        <div className="container">
          <div className="row align-items">
            <div className="col-lg-8 col-md-8">
              <div className="profile-orders content-margined">
                <table className="table">
                  <thead>
                    <tr className="trProductSreen">
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>id test 1</td>
                      <td>Date</td>
                      <td>Total</td>
                      <td></td>
                      <td>Details</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div>
                <div className="login_part_form_iner">
                  <h3>Your In Formation</h3>
                  <form
                    className="row contact_form"
                    action="#"
                    method="post"
                    noValidate="noValidate"
                  >
                    {/*  */}
                    <div className="col-md-12 form-group p_star">
                      <label htmlFor="name">name</label>
                      <input
                        className="form-control"
                        type="name"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <label htmlFor="email">E-Mail</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        value={password}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <label htmlFor="rePassword">Comfrim Password</label>
                      <input
                        className="form-control"
                        type="Password"
                        id="rePassword"
                        name="rePassword"
                        placeholder="Comfirm Password"
                        onChange={(e) => setRePassword(e.target.value)}
                      />
                    </div>
                    {/*  */}
                    <div className="col-md-12 form-group">
                      <div className="creat_account d-flex align-items-center"></div>
                      <button type="submit" className="btn_3">
                        Update
                      </button>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="btn_3"
                      >
                        Logout
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfileScreen;
