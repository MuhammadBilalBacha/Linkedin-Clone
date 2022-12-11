import React, { useState, useEffect } from "react";
import "./Main.css";
// import { HiPhoto } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import Post from "../Posts/Post";
import { useSelector } from "react-redux";
import PostModel from "./PostModel/PostModel";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/firebase";
import loader from "../../Assets/load.gif";

const Main = () => {
  const state = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  const [postmodal, setPostModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const gettingPosts = async () => {
    const result = await getDocs(collection(firestore, "posts")).then((res) => {
      // console.log(res.docs);
      return setPosts(res.docs);
    });
    return result;
  };
  useEffect(() => {
    if (state.user !== null) {
      setLogin(true);
    }
    gettingPosts();
  }, [state.user, posts]);
  if (posts.length === 0) {
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
      <div className="mainSection mb-4">
        <div className="card main">
          <div className="top mx-4 py-3">
            <div>
              {login && state.user.photoURL ? (
                <img
                  src={state.user.photoURL}
                  className="me-3"
                  alt="..."
                  style={{ width: "40px", borderRadius: "20px" }}
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="me-3"
                  alt="..."
                  style={{ width: "40px", borderRadius: "20px" }}
                />
              )}
            </div>
            <div className="maininput">
              <input
                type="text "
                placeholder="Start a Post"
                onClick={() => setPostModal(true)}
              />
            </div>
          </div>
          <div className="end mx-4 py-3">
            <div
              className="Color"
              style={{ cursor: "pointer" }}
              onClick={() => setPostModal(true)}
            >
              <span className="me-1 h5">
                <IoMdPhotos />
              </span>
              <span className="fw-semibold">Photo</span>
            </div>
            <div
              className="Color"
              style={{ cursor: "pointer" }}
              onClick={() => setPostModal(true)}
            >
              <span className="me-1 h5">
                <FaPhotoVideo />
              </span>
              <span className="fw-semibold">Videos</span>
            </div>
            <div
              className="Color"
              style={{ cursor: "pointer" }}
              onClick={() => setPostModal(true)}
            >
              <span className="me-1 h5">
                <BsCalendar2EventFill />
              </span>
              <span className="fw-semibold">Events</span>
            </div>
            <div
              className="Color "
              style={{ cursor: "pointer" }}
              onClick={() => setPostModal(true)}
            >
              <span className="me-1 h5">
                <RiArticleLine />
              </span>
              <span className="fw-semibold">Write Article</span>
            </div>
          </div>
        </div>
      </div>
      {/* Post Model  */}
      {/* <Post /> */}
      {postmodal && <PostModel closed={() => setPostModal(false)} />}
      {/* Posts  */}
      {posts.length !== 0 &&
        posts.map((data) => {
          return (
            <div key={data.id}>
              <Post {...data.data()} />
            </div>
          );
        })}
    </div>
  );
};

export default Main;
