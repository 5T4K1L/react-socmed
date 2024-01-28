import React, { useState } from "react";
import "../styles/Homepage.css";
import pic from "../images/Tamano.jpg";
import Post from "../components/Post";
import homepage from "../images/home.png";
import search from "../images/search.png";
import add from "../svgs/add-circle-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Homepage = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const nav = useNavigate();

  const handleProfile = () => {
    setProfileClicked((prevProfile) => !prevProfile);
  };

  const handleSignout = () => {
    signOut(auth);
    nav("/login");
  };

  return (
    <div className="homepageContainer">
      {profileClicked ? (
        <div className="profileClicked">
          <div onClick={handleProfile} className="darkenBackground"></div>
          <div style={{ bottom: 0 }} className="container">
            <div className="change-account">
              <button>Profile</button>
            </div>
            <div className="signout">
              <button onClick={handleSignout}>Signout</button>
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
                <img onClick={() => nav("/")} src={homepage} alt="" />
              </button>
              <button>
                <img src={search} alt="" />
              </button>
              <button>
                <img style={{ height: 35 }} src={add} alt="" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
