import React from "react";
import pic from "../images/Tamano.jpg";
import dummy from "../images/dummy.jpg";

const Post = () => {
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
      </div>
    </div>
  );
};

export default Post;
