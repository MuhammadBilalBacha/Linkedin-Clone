import React from "react";
import { MdEmojiPeople } from "react-icons/md";
import { FaBitbucket } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { logoutAction } from "../../../Redux/Actions/logoutAction";

const UserProfile = (props) => {
  const state = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  //   const dispatch = useDispatch();
  useEffect(() => {
    if (state.user !== null) {
      setLogin(true);
    }
  }, [state.user]);
  return (
    <div>
      <div className="card text-center mb-3">
        <div className="card-body py-5">
          {login && state.user.photoURL ? (
            <img
              src={state.user.photoURL}
              className=""
              alt="..."
              style={{ borderRadius: "50%", width: "222px" }}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className=""
              alt="..."
              style={{ width: "40px" }}
            />
          )}
          {login && (
            <>
              <h5 className="card-title py-3 mt-5">{state.user.displayName}</h5>
              <div className="text-secondary">{state.user.email}</div>
            </>
          )}
          {/* <span className="py-1 Color fw-bold"> add a photo</span> */}
          <div className="secondSection py-3 my-4">
            <div className="section-left">
              <span className="fw-bold text-secondary">Connections</span>
              <span className="fw-bold">Grow your networks</span>
            </div>
            <div className="icon Color">
              <MdEmojiPeople />
            </div>
          </div>
          <div className="thirdSection py-3 my-4">
            <div>
              <FaBitbucket className="me-2 icon Color" />
              <span>My Items</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* last card  */}
      <div className="card text-center">
        <div className="card-body">
          <div className="secondSection py-3 my-4">
            <div className="section-left">
              <span className="fw-bold ">Groups</span>
              <span className="fw-bold">Events</span>
              <span className="fw-bold">Follows hashtags</span>
            </div>
            <div className="icon Color">
              <BsPlusLg />
            </div>
          </div>
          <div className="thirdSection">
            <div>
              <span className="fw-bold text-secondary">Discover More</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="btn btn-danger w-100 my-3" onClick={props.logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
