import React, { useState } from "react";
import pic from "../images/Tamano.jpg";
import dummy from "../images/dummy.jpg";
import like from "../images/heart.png";
import liked from "../images/heart_liked.png";
import comment from "../images/comment.png";
import favorite from "../images/favorite.png";
import fave from "../images/fave.png";

const Post = () => {
  const [heart, setHeart] = useState(false);
  const [faved, setFaved] = useState(false);

  const handleHeart = () => {
    setHeart((prevHeart) => !prevHeart);
  };

  const handleFave = () => {
    setFaved((prevFaved) => !prevFaved);
  };

  return (
    <div className="postContainer">
      <div className="post">
        <div className="upper">
          <img src={pic} alt="" />
          <div className="usernameCaption">
            <p>@alfonzoakil</p>
            <p>This is my first post.</p>
          </div>
        </div>
        <div className="middle">
          <img src={dummy} alt="" />
        </div>
        <div className="bottom">
          <div className="images">
            {heart ? (
              <button onClick={handleHeart}>
                <img src={liked} alt="" />
              </button>
            ) : (
              <button onClick={handleHeart}>
                <img src={like} alt="" />
              </button>
            )}
            <button>
              <img src={comment} alt="" />
            </button>
            {faved ? (
              <button onClick={handleFave}>
                <img src={fave} alt="" />
              </button>
            ) : (
              <button onClick={handleFave}>
                <img src={favorite} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
