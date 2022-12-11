import React, { Fragment, useState, useEffect } from "react";
import "./Header.css";
import { BsLinkedin, BsSearch, BsFillBagFill } from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const state = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  const Navigate = useNavigate();
  const userid = state.user.uid;
  useEffect(() => {
    if (state.user !== null) {
      setLogin(true);
    }
  }, [state.user]);
  const profileHandler = () => {
    console.log(userid);
    Navigate(`/profile/${userid}`);
  };

  return (
    <Fragment>
      <nav className="header-navbar fixed-top py-3">
        <div className="container header-navbar">
          <div className="header">
            <span className="header-icon me-3">
              <BsLinkedin />
            </span>
            <span className="header-input">
              <BsSearch className="search-icon" />
              <input type="text" placeholder="search here" />
            </span>
            <div className="header-menu">
              <div className="menu-home me-3" style={{ cursor: "pointer" }}>
                <AiFillHome className="homeonicon" />
                <span className="homeon fw-semibold ">Home</span>
              </div>
              <div className="menu-home me-3" style={{ cursor: "pointer" }}>
                <MdPeopleAlt />
                <span>Networks</span>
              </div>
              <div className="menu-home  me-3" style={{ cursor: "pointer" }}>
                <BsFillBagFill />
                <span>Jobs</span>
              </div>
              <div className="menu-home me-3" style={{ cursor: "pointer" }}>
                <AiFillMessage />
                <span>Messaging</span>
              </div>
              <div className="menu-home me-3" style={{ cursor: "pointer" }}>
                <IoMdNotifications />
                <span>Notification</span>
              </div>
            </div>
            <span className="user">
              {login && state.user.photoURL && (
                <img
                  src={state.user.photoURL}
                  style={{ borderRadius: "20px" }}
                  alt="Err"
                  className="forhover"
                  onClick={profileHandler}
                />
              )}
              {/* <span className="fw-semibold forhover">
                {!state.login && <span>Me</span>}
                <IoMdArrowDropdown />
              </span> */}
              {/* {signout && <button className="btn btn-danger">Signout</button>} */}
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
