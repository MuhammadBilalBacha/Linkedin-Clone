import React from "react";
import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import ReactPlayer from "react-player";

const Post = (props) => {
  // const videoLink = "https://www.youtube.com/watch?v=C8kSrkz8Hz8";
  return (
    <div>
      <div className="card my-3">
        <div className="container py-3 ">
          <div className="post">
            <div className="post-top ">
              <div className="d-flex">
                <img
                  src={props.pic}
                  className="me-3"
                  alt="..."
                  style={{ width: "55px", borderRadius: "40px" }}
                />
                <div className="post-title">
                  <span className="fw-semibold h5">{props.name}</span>
                  <span className="text-secondary">{props.timestamp}</span>
                </div>
              </div>
              <div>
                <span className="fw-bold h3" style={{ cursor: "pointer" }}>
                  <BsThreeDots />
                </span>
              </div>
            </div>
            <div className="post-mid mx-2 pt-4">
              <div className="h6 pb-3">{props.descripton}</div>
            </div>
            <div>
              <div className="video ">
                {props.video && (
                  <ReactPlayer
                    width="100%"
                    height="220px"
                    style={{
                      width: "100%",
                      height: "237px",
                      objectFit: "contain",
                      marginBlock: "10rem",
                    }}
                    url={props.video}
                  />
                )}
              </div>
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIJQ4q4eeBykEJsIN9c2tHkv7KCbNeuEIyG7Te1a57g&s"
                className="me-3 w-100"
                alt="..."
              /> */}
            </div>
            <div className="likeshow mx-2  px-3 mt-4 ">
              {/* <div className="likes">
                <span>
                  <AiFillLike className="Color me-1 h5" />
                </span>
                <span>100</span>
              </div> */}
              {/* <div className="comments">
                <span>
                  <AiOutlineComment className="Color me-1 h5" />
                </span>
                <span>20</span>
              </div> */}
              {/* <div className="share">
                <span>
                  <FaShare className="Color me-1 h5" />
                </span>
                <span>5</span>
              </div> */}
            </div>
            <div className="post-end mx-2 py-2">
              <div className="like">
                <AiFillLike className="text-center h3" />
                <div>Like</div>
              </div>
              <div className="like">
                <AiOutlineComment className="text-center h3" />
                <div>Comment</div>
              </div>
              <div className="like">
                <FaShare className="text-center h3" />
                <div>Share</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
