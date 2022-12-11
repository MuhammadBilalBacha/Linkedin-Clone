import React, { Fragment, useState, useEffect } from "react";
import "./PostModel.css";
import { ImCross } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";
import { firestore } from "../../../Firebase/firebase";
// import { postAction } from "../../../Redux/Actions/PostAction";

const PostModel = (props) => {
  const [shareImage, setShareImage] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [asset, setAsset] = useState("");
  const state = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  const username = state.user.displayName;
  const photourl = state.user.photoURL;
  const useruid = state.user.uid;
  const imageChanger = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image ,the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };
  const switchChanger = (asset) => {
    return setAsset(asset);
  };

  useEffect(() => {
    if (state.user !== null) {
      setLogin(true);
    }
  }, [state.user]);
  const postHandler = async () => {
    // console.log(useruid);
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const space = " ";
    const dateandtime = date + space + time;
    await addDoc(collection(firestore, "posts"), {
      name: username,
      pic: photourl,
      descripton: description,

      video: videoLink,
      timestamp: dateandtime,
      uid: useruid,
      gettingdata: true,
    });
    setDescription("");
    setShareImage("");
    setVideoLink("");

    // const imageRef = ref(
    //   storage,
    //   `uploads/images/${Math.floor(Math.random() * 100000)}-${shareImage}`
    // );
    // const uploadImage = await uploadBytes(imageRef, shareImage);
    return alert("you posted");
    // return postAction(username, photourl, description, shareImage);
  };
  return (
    <div className="postmodel">
      <div className="postmodel-card container">
        <div className="postmodel-top mx-2 py-2">
          <h3 className="text-secondary">Create a post</h3>
          <button className="btn btn-outline-danger" onClick={props.closed}>
            <ImCross />
          </button>
        </div>
        <div className="postmodel-mid mx-5 py-2">
          {login && state.user.photoURL && (
            <div className="mid-top pt-2">
              <img
                src={state.user.photoURL}
                className="me-3"
                alt="..."
                style={{ width: "55px", borderRadius: "40px" }}
              />
              <h3>{state.user.displayName}</h3>
            </div>
          )}
          <div className="mid-end mt-3">
            <textarea
              name=""
              id=""
              className="w-100 scroll"
              cols="30"
              rows="3"
              value={description}
              placeholder="Write your post here"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input
            type="file"
            accept="image/gif,image/jpg, image/jpeg, image/png"
            name="image"
            id="file"
            onChange={imageChanger}
            style={{ display: "none" }}
          />
          {asset === "image" && (
            <p className="my-1">
              <label htmlFor="file" className="btn btn-secondary mb-1">
                Upload an image
              </label>
              {shareImage && (
                <img
                  src={URL.createObjectURL(shareImage)}
                  alt=""
                  className="myimage"
                />
              )}
            </p>
          )}
          {asset === "video" && (
            <Fragment>
              <input
                type="text"
                placeholder="enter video link here"
                className="my-1"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
              <>
                {videoLink && (
                  <div className="videoplayer col-lg-4">
                    <ReactPlayer
                      className="video"
                      width="100%"
                      height="237px"
                      style={{
                        width: "100%",
                        height: "195px",
                        objectFit: "contain",
                      }}
                      url={videoLink}
                      controls={false}
                    />
                  </div>
                )}
              </>
            </Fragment>
          )}
        </div>
        <div className="postmodel-end mx-5 py-2">
          <div className="end-top">
            <div
              className="btn btn-secondary h3 mx-2 Color"
              onClick={() => switchChanger("image")}
            >
              {" "}
              <HiPhotograph />
            </div>
            <div
              className="btn btn-secondary mx-2 h3"
              onClick={() => switchChanger("video")}
            >
              <FaYoutube />
            </div>
            {/* <button className="btn btn-secondary mx-2">
              {" "}
              <BiCommentDetail /> Anyone
            </button> */}
          </div>
          <div className="end-end">
            <button
              className="post-butto btn btn-info"
              disabled={
                description.length === 0 &&
                shareImage.length === 0 &&
                videoLink.length === 0
              }
              onClick={postHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModel;
