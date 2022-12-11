import React from "react";
import Left from "../Left";
import Main from "../Main";
import Right from "../Right";
import "./Body.css";
import Toptext from "./Toptext";

const Body = () => {
  return (
    <div>
      <Toptext />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mb-3 left">
            <Left />
          </div>
          <div className="col-md-6 mb-3">
            <Main />
          </div>
          <div className="col-md-3 right">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
