import React, { useState } from "react";
import "../styles/Homepage.css";
import pic from "../images/Tamano.jpg";
import Post from "../components/Post";
import homepage from "../images/home.png";
import search from "../images/search.png";

const Homepage = () => {
  const [profileClicked, setProfileClicked] = useState(false);

  const handleProfile = () => {
    setProfileClicked((prevProfile) => !prevProfile);
    setTimeout(() => {
      setProfileClicked((prevProfile) => !prevProfile);
    }, 3000);
  };

  return (
    <div className="homepageContainer">
      {profileClicked ? (
        <div className="profileClicked">
          <div className="darkenBackground"></div>
          <div className="container">
            <div className="signout">
              <button>Signout</button>
            </div>
            <div className="change-account">
              <button>Change Account</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="profile">
            <img
              style={{ cursor: "pointer" }}
              onClick={handleProfile}
              src={pic}
              alt=""
            />
          </div>
          <Post />
          <div className="footer">
            <div className="images">
              <button>
                <img src={homepage} alt="" />
              </button>
              <button>
                <img src={search} alt="" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
