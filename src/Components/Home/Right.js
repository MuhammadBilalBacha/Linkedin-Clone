import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./Right.css";

const Right = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="right py-3 mx-3">
            <div className="right-top">
              <span className="span fw-semibold text-secondary">
                Add to your feed
              </span>
              <span className="Color h5">
                <AiFillFileAdd />
              </span>
            </div>
            <div className="right-end mb-2 d-flex">
              <span className="p-1 back circle me-2 ">
                <div className="bg-light p-1 h2">#</div>
              </span>
              <div className="front">
                <div className=""># Linkedin</div>
                <button className="w-100 btn-two">Follow</button>
              </div>
            </div>
            <div className="right-end d-flex py-2">
              <span className="p-1 back circle me-2 ">
                <div className="bg-light p-1 h2">#</div>
              </span>
              <div className="front">
                <div className=""># Video</div>
                <button className="w-100 btn-two">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
