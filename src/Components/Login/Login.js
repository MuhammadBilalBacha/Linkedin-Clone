import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import "./Login.css";
import main from "../../Assets/main.png";
import google from "../../Assets/google.png";
import { signinWithGoogle } from "../../Redux/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import loader from "../../Assets/load.gif";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log(state.user);
  useEffect(() => {
    if (state.user !== null) {
      Navigate("/home");
    }
  });
  if (state.isLoading) {
    return (
      <div className="container-fluid loader">
        <div className="text-center">
          <img src={loader} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <nav className="py-3 login-navbar">
        <div className="container mynavbar">
          <div className="navbar-logo">
            <span className="me-1">Linked</span>
            <span>
              <BsLinkedin />
            </span>
          </div>
          <div className="navbar-button">
            <button className="btn-one me-3 fw-semibold">Join now</button>
            <button className="btn-two">Sign in</button>
          </div>
        </div>
      </nav>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 mb-3 navbar-title">
            <h1>Welcome to linkedin community</h1>
          </div>
          <div className="col-md-6 myImage">
            <img src={main} className="w-100" alt="" />
          </div>
        </div>
        <div className="navbar-signin__btn py-5">
          <div className="col-md-6 py-5">
            <img
              src={google}
              style={{ width: "355px" }}
              alt=""
              onClick={() => dispatch(signinWithGoogle())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
