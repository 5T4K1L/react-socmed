import React from "react";
import "../styles/Homepage.css";
import pic from "../images/Tamano.jpg";
import Post from "../components/Post";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="profile">
        <img src={pic} alt="" />
      </div>
      <Post />
    </div>
  );
};

export default Homepage;
